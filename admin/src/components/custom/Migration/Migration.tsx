import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectItem, SelectTrigger, SelectValue, SelectContent } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useState, useEffect } from "react";

const Migration = () => {
    const [formData, setFormData] = useState({
        dbType: '',
        host: '',
        port: '',
        database: '',
        username: '',
        password: '',
    });
    const [isRequestSent, setIsRequestSent] = useState(false);

    const [connectionString, setConnectionString] = useState('');
    const [error, setError] = useState('');

    const defaultPorts = {
        oracle: '1521',
        msql: '1433',
        mysql: '3306',
        maria: '3306',
        postgresql: '5432',
    };

    const buildConnectionString = () => {
        try {
            if (!formData.dbType || !formData.host) {
                return '';
            }

            const port = formData.port || defaultPorts[formData.dbType];

            const connectionStrings = {
                oracle: `oracle:thin:@${formData.host}:${port}/${formData.database}`,
                msql: `jdbc:sqlserver://${formData.host}:${port};database=${formData.database}`,
                mysql: `mysql://${formData.username}:${formData.password}@${formData.host}:${port}/${formData.database}`,
                maria: `mysql://${formData.username}:${formData.password}@${formData.host}:${port}/${formData.database}`,
                postgresql: `postgresql://${formData.username}:${formData.password}@${formData.host}:${port}/${formData.database}`,
            };
            return connectionStrings[formData.dbType];
        } catch (err) {
            setError('Error building connection string');
            return '';
        }
    };

    useEffect(() => {
        const newConnectionString = buildConnectionString();
        setConnectionString(newConnectionString);
    }, [formData]);

    const handleInputChange = (field) => (e) => {
        setFormData((prev) => ({
            ...prev,
            [field]: e.target.value,
        }));
        setError('');
    };

    const handleDbTypeChange = (value) => {
        setFormData((prev) => ({
            ...prev,
            dbType: value,
            port: defaultPorts[value],
        }));
        setError('');
    };

    const onFormSubmit = async (e) => {
        e.preventDefault();
        if (!connectionString) {
            setError('Fill in all required fields');
            return;
        }

        try {
            setIsRequestSent(true)
            const res = await fetch('http://localhost:3000/api/v1/admin/db/check', {
                method: 'POST',
                body: JSON.stringify({
                    connectionString,
                    dbType: formData.dbType,
                }),
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
            });

            if (res.status === 200) {
                alert('Connection Successful!');
                setIsRequestSent(false);
            } else {
                alert('Something went wrong while connecting!');
                setIsRequestSent(false)
            }
        } catch (error) {
            console.error('Error connecting to database:', error);
            setError('Error connecting to database');
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
            <Card className="w-full max-w-lg">
                <CardHeader>
                    <h1 className="text-center text-2xl font-semibold">Database Migration</h1>
                </CardHeader>
                <CardContent>
                    <form onSubmit={onFormSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <Label>Database Type</Label>
                            <Select value={formData.dbType} onValueChange={handleDbTypeChange}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select database type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="oracle" disabled>Oracle Database</SelectItem>
                                    <SelectItem value="msql">Microsoft SQL Server</SelectItem>
                                    <SelectItem value="mysql">MySQL</SelectItem>
                                    <SelectItem value="maria" disabled>MariaDB</SelectItem>
                                    <SelectItem value="postgresql">PostgreSQL</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="host">Host</Label>
                                <Input
                                    id="host"
                                    placeholder="localhost"
                                    value={formData.host}
                                    onChange={handleInputChange('host')}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="port">Port</Label>
                                <Input
                                    id="port"
                                    placeholder={formData.dbType ? defaultPorts[formData.dbType] : 'Port'}
                                    value={formData.port}
                                    onChange={handleInputChange('port')}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="database">Database Name</Label>
                            <Input
                                id="database"
                                placeholder="mydatabase"
                                value={formData.database}
                                onChange={handleInputChange('database')}
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="username">Username</Label>
                            <Input
                                id="username"
                                placeholder="Database username"
                                value={formData.username}
                                onChange={handleInputChange('username')}
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                placeholder="Database password"
                                value={formData.password}
                                onChange={handleInputChange('password')}
                            />
                        </div>

                        {connectionString && (
                            <div className="space-y-2">
                                <Label>Connection String</Label>
                                <div className="p-2 bg-gray-100 rounded-md break-all">
                                    <code className="text-sm">{connectionString}</code>
                                </div>
                            </div>
                        )}

                        {error && (
                            <Alert variant="destructive">
                                <AlertDescription>{error}</AlertDescription>
                            </Alert>
                        )}
                    </form>
                </CardContent>
                <CardFooter className="flex justify-end space-x-4">
                    <Button type="submit" onClick={onFormSubmit} disabled={!connectionString || isRequestSent}>
                        Connect
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
};

export default Migration;