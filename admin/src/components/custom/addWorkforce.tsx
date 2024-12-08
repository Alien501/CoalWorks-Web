'use client'

import { useState, useEffect } from 'react'
import axios from 'axios'
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { AlertTriangle } from 'lucide-react'
import { toast } from "sonner"

interface User {
    userId: number
    username: string
    isSupervisor: boolean
    sections: { id: number }[]
    profileImage?: string
}

interface AddWorkForceProps {
    overAllSelectedSection: any
}

export const AddWorkForce = ({ overAllSelectedSection }: AddWorkForceProps) => {
    const [users, setUsers] = useState<User[]>([])
    const [selectedSupervisors, setSelectedSupervisors] = useState<number[]>([])
    const [selectedOperators, setSelectedOperators] = useState<number[]>([])
    const [step, setStep] = useState<'operators' | 'supervisors'>('operators')

    useEffect(() => {
        fetchUsers()
    }, [])

    const fetchUsers = async () => {
        try {
            const response = await axios.get('/api/data/user')
            setUsers(response.data.data)
        } catch (error) {
            toast.error('Failed to fetch users')
        }
    }

    const handleOperatorToggle = (userId: number) => {
        setSelectedOperators(prev =>
            prev.includes(userId)
                ? prev.filter(id => id !== userId)
                : [...prev, userId]
        )
    }

    const proceedToSupervisors = () => {
        if (selectedOperators.length === 0) {
            toast.warning('Please select at least one operator')
            return
        }
        setStep('supervisors')
    }

    const handleSupervisorToggle = (userId: number) => {
        setSelectedSupervisors(prev =>
            prev.includes(userId)
                ? prev.filter(id => id !== userId)
                : [...prev, userId]
        )
    }

    const handleSubmit = async () => {
        try {
            const sectionId = overAllSelectedSection.id;

            if (selectedOperators.length > 0) {
                const assignResponse = await axios.post('/api/data/sectionuser/assign', {
                    userIds: selectedOperators,
                    sectionId
                });

                console.log('Operators assigned:', assignResponse.data);
            }

            if (selectedSupervisors.length > 0) {
                const supervisorResponse = await axios.post('/api/data/supervisor/create', {
                    userId: selectedSupervisors,
                    sectionId
                });

                console.log('Supervisors created:', supervisorResponse.data);
            }

            setSelectedSupervisors([])
            setSelectedOperators([])
            setStep('operators')
            toast.success('Workforce added successfully')
        } catch (error) {
            console.log(error)
            toast.error('Failed to assign workforce')
        }
    }

    const renderUserCard = (
        user: User,
        isSelected: boolean,
        onToggle: (userId: number) => void,
        disableIfAssigned: boolean = true
    ) => {
        const isAssignedToSection = user.sections && user.sections.length > 0;

        return (
            <div
                key={user.userId}
                className={`flex items-center justify-between p-3 rounded-lg mb-2 ${isSelected ? 'bg-primary/10' : 'hover:bg-secondary/20'
                    } transition-colors`}
            >
                <div className="flex items-center space-x-4">
                    <Avatar>
                        <AvatarImage
                            src={user.profileImage || undefined}
                            alt={user.username}
                        />
                        <AvatarFallback>
                            {user.username.charAt(0).toUpperCase()}
                        </AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="font-semibold">{user.username}</p>
                        {isAssignedToSection && (
                            <div className="text-yellow-600 flex items-center text-sm">
                                <AlertTriangle className="mr-1" size={16} />
                                Already assigned
                            </div>
                        )}
                    </div>
                </div>
                <Checkbox
                    checked={isSelected}
                    onCheckedChange={() => onToggle(user.userId)}
                    disabled={disableIfAssigned && isAssignedToSection}
                />
            </div>
        );
    }

    const renderContent = () => {
        switch (step) {
            case 'operators':
                return (
                    <div>
                        <h2 className="text-xl font-bold mb-4">Select Operators</h2>
                        <div className="max-h-[500px] overflow-y-auto">
                            {users
                                .filter(user => !user.isSupervisor)
                                .map(user => renderUserCard(
                                    user,
                                    selectedOperators.includes(user.userId),
                                    handleOperatorToggle
                                ))}
                        </div>
                        <div className="mt-4 flex justify-between">
                            <Button variant="outline">
                                Cancel
                            </Button>
                            <Button onClick={proceedToSupervisors}>
                                Next
                            </Button>
                        </div>
                    </div>
                );

            case 'supervisors':
                return (
                    <div>
                        <h2 className="text-xl font-bold mb-4">Select Supervisors</h2>
                        <div className="max-h-[500px] overflow-y-auto">
                            {users
                                .filter(user => !user.isSupervisor)
                                .map(user => renderUserCard(
                                    user,
                                    selectedSupervisors.includes(user.userId),
                                    handleSupervisorToggle
                                ))}
                        </div>
                        <div className="mt-4 flex justify-between">
                            <Button
                                variant="outline"
                                onClick={() => setStep('operators')}
                            >
                                Back
                            </Button>
                            <Button
                                onClick={handleSubmit}
                                disabled={selectedSupervisors.length === 0}
                            >
                                Add Workforce
                            </Button>
                        </div>
                    </div>
                );
        }
    }

    return (
        <div className="container mx-auto p-4 max-w-md">
            <h1 className="text-2xl font-bold mb-4">Add Workforce</h1>
            {renderContent()}
        </div>
    );
}

export default AddWorkForce;

