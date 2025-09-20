import { useState, useEffect } from 'react';
import { Plus, Trash2, Edit, Play, CheckCircle, AlertTriangle, Clock, User } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Badge } from '../components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';
import { ScrollArea } from '../components/ui/scroll-area';
import { toast } from 'sonner';

interface Task {
    id?: number;
    title: string;
    description: string;
    order: number;
    assignedTo?: number;
    dueDate?: string;
    status?: string;
}

interface SMP {
    id?: number;
    name: string;
    description: string;
    order: number;
    estimatedDuration?: number;
    status?: string;
    tasks: Task[];
}

interface ActionPlan {
    id: number;
    name: string;
    description: string;
    status: string;
    priority: string;
    createdAt: string;
    createdBy: number;
    smps: SMP[];
    creator: {
        userId: number;
        username: string;
        email: string;
    };
}

interface User {
    userId: number;
    username: string;
    email: string;
    phone?: string;
    userRoleId: number;
    positionId?: number;
    isActive: boolean;
    profileImage?: string;
    lastLogin?: string;
    createdAt: string;
    updatedAt: string;
    createdBy?: number;
    isSupervisor: boolean;
}

interface Role {
    roleId: number;
    roleName: string;
    description: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
    permissions: any[];
    Users: User[];
}

const ActionPlanPage = () => {
    const [actionPlans, setActionPlans] = useState<ActionPlan[]>([]);
    const [roles, setRoles] = useState<Role[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isCreating, setIsCreating] = useState(false);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    
    // Form state
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        priority: 'medium',
        createdBy: 1 // This should come from auth context
    });
    
    const [smps, setSmps] = useState<SMP[]>([]);

    useEffect(() => {
        fetchActionPlans();
        fetchRoles();
    }, []);

    const fetchActionPlans = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/v1/action-plans');
            const data = await response.json();
            if (data.error === null) {
                setActionPlans(data.data);
            }
        } catch (error) {
            console.error('Error fetching action plans:', error);
            toast.error('Failed to fetch action plans');
        } finally {
            setIsLoading(false);
        }
    };


    const fetchRoles = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/v1/role');
            const data = await response.json();
            if (data.error === null) {
                console.log('Roles data:', data.data);
                setRoles(data.data);
            }
        } catch (error) {
            console.error('Error fetching roles:', error);
        }
    };

    const addSMP = () => {
        const newSMP: SMP = {
            name: '',
            description: '',
            order: smps.length + 1,
            estimatedDuration: 0,
            tasks: []
        };
        setSmps([...smps, newSMP]);
    };

    const updateSMP = (index: number, field: keyof SMP, value: any) => {
        const updatedSmps = [...smps];
        updatedSmps[index] = { ...updatedSmps[index], [field]: value };
        setSmps(updatedSmps);
    };

    const removeSMP = (index: number) => {
        const updatedSmps = smps.filter((_, i) => i !== index);
        // Reorder remaining SMPs
        updatedSmps.forEach((smp, i) => {
            smp.order = i + 1;
        });
        setSmps(updatedSmps);
    };

    const addTask = (smpIndex: number) => {
        const updatedSmps = [...smps];
        const newTask: Task = {
            title: '',
            description: '',
            order: updatedSmps[smpIndex].tasks.length + 1,
            assignedTo: undefined,
            dueDate: ''
        };
        updatedSmps[smpIndex].tasks.push(newTask);
        setSmps(updatedSmps);
    };

    const updateTask = (smpIndex: number, taskIndex: number, field: keyof Task, value: any) => {
        const updatedSmps = [...smps];
        updatedSmps[smpIndex].tasks[taskIndex] = {
            ...updatedSmps[smpIndex].tasks[taskIndex],
            [field]: value
        };
        setSmps(updatedSmps);
    };

    const removeTask = (smpIndex: number, taskIndex: number) => {
        const updatedSmps = [...smps];
        updatedSmps[smpIndex].tasks.splice(taskIndex, 1);
        // Reorder remaining tasks
        updatedSmps[smpIndex].tasks.forEach((task, i) => {
            task.order = i + 1;
        });
        setSmps(updatedSmps);
    };

    const handleSubmit = async () => {
        if (!formData.name.trim()) {
            toast.error('Action plan name is required');
            return;
        }

        if (smps.length === 0) {
            toast.error('At least one SMP is required');
            return;
        }

        setIsCreating(true);
        try {
            const response = await fetch('http://localhost:3000/api/v1/action-plans', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    smps: smps.map(smp => ({
                        ...smp,
                        tasks: smp.tasks.map(task => ({
                            ...task,
                            assignedTo: task.assignedTo || null,
                            dueDate: task.dueDate || null
                        }))
                    }))
                }),
            });

            const data = await response.json();
            if (data.error === null) {
                toast.success('Action plan created successfully');
                setIsDialogOpen(false);
                setFormData({ name: '', description: '', priority: 'medium', createdBy: 1 });
                setSmps([]);
                fetchActionPlans();
            } else {
                toast.error(data.message || 'Failed to create action plan');
            }
        } catch (error) {
            console.error('Error creating action plan:', error);
            toast.error('Failed to create action plan');
        } finally {
            setIsCreating(false);
        }
    };

    const activateActionPlan = async (id: number) => {
        try {
            const response = await fetch(`http://localhost:3000/api/v1/action-plans/${id}/activate`, {
                method: 'POST',
            });
            const data = await response.json();
            if (data.error === null) {
                toast.success('Action plan activated successfully');
                fetchActionPlans();
            } else {
                toast.error(data.message || 'Failed to activate action plan');
            }
        } catch (error) {
            console.error('Error activating action plan:', error);
            toast.error('Failed to activate action plan');
        }
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'active': return 'bg-green-500';
            case 'draft': return 'bg-yellow-500';
            case 'completed': return 'bg-blue-500';
            case 'cancelled': return 'bg-red-500';
            default: return 'bg-gray-500';
        }
    };

    const getPriorityColor = (priority: string) => {
        switch (priority) {
            case 'critical': return 'bg-red-600';
            case 'high': return 'bg-orange-500';
            case 'medium': return 'bg-yellow-500';
            case 'low': return 'bg-green-500';
            default: return 'bg-gray-500';
        }
    };

    if (isLoading) {
        return (
            <div className="container mx-auto p-6">
                <div className="flex items-center justify-center h-64">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto p-6 space-y-6 bg-background text-foreground min-h-screen">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-foreground">Action Plans</h1>
                    <p className="text-muted-foreground">Create and manage Standard Maintenance Procedures (SMPs)</p>
                    {/* Debug info - remove this after testing */}
                    <div className="text-xs text-muted-foreground mt-2">
                        Debug: {roles.reduce((total, role) => total + role.Users.length, 0)} users across {roles.length} roles loaded
                    </div>
                </div>
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogTrigger asChild>
                        <Button className="flex items-center gap-2">
                            <Plus className="h-4 w-4" />
                            Create Action Plan
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                            <DialogTitle>Create New Action Plan</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-6">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="text-sm font-medium text-foreground">Action Plan Name</label>
                                    <Input
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        placeholder="Enter action plan name"
                                        className="mt-1"
                                    />
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-foreground">Priority</label>
                                    <Select value={formData.priority} onValueChange={(value) => setFormData({ ...formData, priority: value })}>
                                        <SelectTrigger className="mt-1">
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="low">Low</SelectItem>
                                            <SelectItem value="medium">Medium</SelectItem>
                                            <SelectItem value="high">High</SelectItem>
                                            <SelectItem value="critical">Critical</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                            <div>
                                <label className="text-sm font-medium text-foreground">Description</label>
                                <Textarea
                                    value={formData.description}
                                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                    placeholder="Enter action plan description"
                                    className="mt-1"
                                    rows={3}
                                />
                            </div>

                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-lg font-semibold text-foreground">SMPs (Standard Maintenance Procedures)</h3>
                                    <Button onClick={addSMP} variant="outline" size="sm">
                                        <Plus className="h-4 w-4 mr-2" />
                                        Add SMP
                                    </Button>
                                </div>

                                <ScrollArea className="h-96">
                                    <div className="space-y-4">
                                        {smps.map((smp, smpIndex) => (
                                            <Card key={smpIndex} className="border-border">
                                                <CardHeader className="pb-3">
                                                    <div className="flex justify-between items-start">
                                                        <div className="flex-1 space-y-2">
                                                            <div className="flex items-center gap-2">
                                                                <Badge variant="outline">SMP {smp.order}</Badge>
                                                                <Input
                                                                    value={smp.name}
                                                                    onChange={(e) => updateSMP(smpIndex, 'name', e.target.value)}
                                                                    placeholder="SMP Name"
                                                                    className="flex-1"
                                                                />
                                                            </div>
                                                            <Textarea
                                                                value={smp.description}
                                                                onChange={(e) => updateSMP(smpIndex, 'description', e.target.value)}
                                                                placeholder="SMP Description"
                                                                rows={2}
                                                            />
                                                            <div className="flex gap-2">
                                                                <Input
                                                                    type="number"
                                                                    value={smp.estimatedDuration || ''}
                                                                    onChange={(e) => updateSMP(smpIndex, 'estimatedDuration', parseInt(e.target.value) || 0)}
                                                                    placeholder="Duration (minutes)"
                                                                    className="w-32"
                                                                />
                                                            </div>
                                                        </div>
                                                        <Button
                                                            onClick={() => removeSMP(smpIndex)}
                                                            variant="ghost"
                                                            size="sm"
                                                            className="text-destructive hover:text-destructive"
                                                        >
                                                            <Trash2 className="h-4 w-4" />
                                                        </Button>
                                                    </div>
                                                </CardHeader>
                                                <CardContent>
                                                    <div className="space-y-3">
                                                        <div className="flex justify-between items-center">
                                                            <h4 className="font-medium text-foreground">Tasks</h4>
                                                            <Button onClick={() => addTask(smpIndex)} variant="outline" size="sm">
                                                                <Plus className="h-3 w-3 mr-1" />
                                                                Add Task
                                                            </Button>
                                                        </div>
                                                        {smp.tasks.map((task, taskIndex) => (
                                                            <div key={taskIndex} className="p-3 bg-muted/50 rounded-lg border border-border">
                                                                <div className="flex justify-between items-start mb-2">
                                                                    <Badge variant="secondary" className="text-xs">Task {task.order}</Badge>
                                                                    <Button
                                                                        onClick={() => removeTask(smpIndex, taskIndex)}
                                                                        variant="ghost"
                                                                        size="sm"
                                                                        className="h-6 w-6 p-0 text-destructive hover:text-destructive"
                                                                    >
                                                                        <Trash2 className="h-3 w-3" />
                                                                    </Button>
                                                                </div>
                                                                <div className="space-y-2">
                                                                    <Input
                                                                        value={task.title}
                                                                        onChange={(e) => updateTask(smpIndex, taskIndex, 'title', e.target.value)}
                                                                        placeholder="Task Title"
                                                                    />
                                                                    <Textarea
                                                                        value={task.description}
                                                                        onChange={(e) => updateTask(smpIndex, taskIndex, 'description', e.target.value)}
                                                                        placeholder="Task Description"
                                                                        rows={2}
                                                                    />
                                                                    <div className="grid grid-cols-2 gap-2">
                                                                        <Select
                                                                            value={task.assignedTo?.toString() || ''}
                                                                            onValueChange={(value) => updateTask(smpIndex, taskIndex, 'assignedTo', parseInt(value))}
                                                                        >
                                                                            <SelectTrigger>
                                                                                <SelectValue placeholder="Assign to" />
                                                                            </SelectTrigger>
                                                                            <SelectContent>
                                                                                {roles.map((role) => {
                                                                                    console.log(`Role ${role.roleName} (${role.roleId}):`, role.Users);
                                                                                    
                                                                                    return (
                                                                                        <div key={role.roleId}>
                                                                                            <div className="px-2 py-1.5 text-sm font-semibold text-muted-foreground bg-muted/50">
                                                                                                {role.roleName}
                                                                                            </div>
                                                                                            {role.Users.length > 0 ? (
                                                                                                role.Users.map((user) => (
                                                                                                    <SelectItem key={user.userId} value={user.userId.toString()}>
                                                                                                        {user.username} - {user.email}
                                                                                                    </SelectItem>
                                                                                                ))
                                                                                            ) : (
                                                                                                <div className="px-2 py-1 text-xs text-muted-foreground italic">
                                                                                                    No users assigned to this role
                                                                                                </div>
                                                                                            )}
                                                                                        </div>
                                                                                    );
                                                                                })}
                                                                            </SelectContent>
                                                                        </Select>
                                                                        <Input
                                                                            type="datetime-local"
                                                                            value={task.dueDate || ''}
                                                                            onChange={(e) => updateTask(smpIndex, taskIndex, 'dueDate', e.target.value)}
                                                                            placeholder="Due Date"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        ))}
                                    </div>
                                </ScrollArea>
                            </div>

                            <div className="flex justify-end gap-2">
                                <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                                    Cancel
                                </Button>
                                <Button onClick={handleSubmit} disabled={isCreating}>
                                    {isCreating ? 'Creating...' : 'Create Action Plan'}
                                </Button>
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>

            <div className="grid gap-6">
                {actionPlans.map((plan) => (
                    <Card key={plan.id} className="shadow-lg border-border">
                        <CardHeader className="bg-muted/20">
                            <div className="flex justify-between items-start">
                                <div className="space-y-2">
                                    <CardTitle className="flex items-center gap-2 text-foreground">
                                        <AlertTriangle className="h-5 w-5 text-primary" />
                                        {plan.name}
                                    </CardTitle>
                                    <p className="text-muted-foreground">{plan.description}</p>
                                    <div className="flex items-center gap-2">
                                        <Badge className={`${getStatusColor(plan.status)} text-white`}>
                                            {plan.status.toUpperCase()}
                                        </Badge>
                                        <Badge className={`${getPriorityColor(plan.priority)} text-white`}>
                                            {plan.priority.toUpperCase()}
                                        </Badge>
                                        <span className="text-sm text-muted-foreground">
                                            Created by {plan.creator.username}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    {plan.status === 'draft' && (
                                        <Button
                                            onClick={() => activateActionPlan(plan.id)}
                                            size="sm"
                                            className="flex items-center gap-1"
                                        >
                                            <Play className="h-3 w-3" />
                                            Activate
                                        </Button>
                                    )}
                                    <Button variant="outline" size="sm">
                                        <Edit className="h-3 w-3" />
                                    </Button>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="grid grid-cols-3 gap-4 text-sm">
                                    <div className="flex items-center gap-2">
                                        <Clock className="h-4 w-4 text-muted-foreground" />
                                        <span className="text-muted-foreground">Created:</span>
                                        <span>{new Date(plan.createdAt).toLocaleDateString()}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-muted-foreground" />
                                        <span className="text-muted-foreground">SMPs:</span>
                                        <span>{plan.smps.length}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <User className="h-4 w-4 text-muted-foreground" />
                                        <span className="text-muted-foreground">Total Tasks:</span>
                                        <span>{plan.smps.reduce((total, smp) => total + smp.tasks.length, 0)}</span>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <h4 className="font-medium text-foreground">SMPs:</h4>
                                    <div className="space-y-2">
                                        {plan.smps.map((smp, index) => (
                                            <div key={index} className="p-3 bg-muted/30 rounded-lg border border-border">
                                                <div className="flex justify-between items-center mb-2">
                                                    <div className="flex items-center gap-2">
                                                        <Badge variant="outline">SMP {smp.order}</Badge>
                                                        <span className="font-medium text-foreground">{smp.name}</span>
                                                    </div>
                                                    {smp.estimatedDuration && (
                                                        <span className="text-sm text-muted-foreground">
                                                            {smp.estimatedDuration} min
                                                        </span>
                                                    )}
                                                </div>
                                                <p className="text-sm text-muted-foreground mb-2">{smp.description}</p>
                                                <div className="text-sm text-muted-foreground">
                                                    Tasks: {smp.tasks.length}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default ActionPlanPage;
