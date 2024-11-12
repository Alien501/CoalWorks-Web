import { useState } from "react";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Loader2 } from "lucide-react";

const DbMapping = ({ databases, connectionString, dbType }) => {
    const [mappings, setMappings] = useState({
        users: {
            name: { database: '', table: '', field: '' },
            role: { database: '', table: '', field: '' },
            email: { database: '', table: '', field: '' },
            contact_number: { database: '', table: '', field: '' },
            role_id: { database: '', table: '', field: '' }
        },
        assets: {
            asset_name: { database: '', table: '', field: '' },
            asset_type: { database: '', table: '', field: '' },
            asset_site: { database: '', table: '', field: '' },
            assset_description: { database: '', table: '', field: '' },
            parent: { database: '', table: '', field: '' }
        }
    });

    const [availableFields, setAvailableFields] = useState({});
    const [loading, setLoading] = useState({});
    const [error, setError] = useState(null);

    const fetchFields = async (dbName, tableName, targetTable, targetField) => {
        const key = `${dbName}-${tableName}`;
        
        if (availableFields[key]) {
            return;
        }

        setLoading(prev => ({ ...prev, [key]: true }));
        setError(null);

        try {
            const response = await fetch('http://localhost:3000/api/v1/admin/db/fields', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    connectionString,
                    dbType,
                    database: dbName,
                    table: tableName
                })
            });

            const data = await response.json();
            
            if (!response.ok) {
                throw new Error(data.error || 'Failed to fetch fields');
            }

            const fields = data.data.filter(field => !field.isPrimary);
            
            setAvailableFields(prev => ({
                ...prev,
                [key]: fields
            }));

        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(prev => ({ ...prev, [key]: false }));
        }
    };

    const handleMappingChange = async (table, field, type, value) => {
        setMappings(prev => ({
            ...prev,
            [table]: {
                ...prev[table],
                [field]: {
                    ...prev[table][field],
                    [type]: value,
                    ...(type !== 'field' && { field: '' })
                }
            }
        }));

        if (type === 'table') {
            const dbName = mappings[table][field].database;
            await fetchFields(dbName, value, table, field);
        }
    };

    const renderFieldMapping = (tableName, fieldName) => {
        const mapping = mappings[tableName][fieldName];
        const selectedDb = mapping.database;
        const selectedTable = mapping.table;
        const key = `${selectedDb}-${selectedTable}`;
        const isLoading = loading[key];

        return (
            <div className="grid grid-cols-3 gap-4 mb-4" key={fieldName}>
                <div>
                    <Label className="text-sm font-medium">{fieldName}</Label>
                </div>
                <div className="col-span-2 space-y-2">
                    <Select
                        value={selectedDb}
                        onValueChange={(value) => handleMappingChange(tableName, fieldName, 'database', value)}
                    >
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select Database" />
                        </SelectTrigger>
                        <SelectContent>
                            {databases.map((db) => (
                                <SelectItem key={db.name} value={db.name}>
                                    {db.name}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>

                    {selectedDb && (
                        <Select
                            value={selectedTable}
                            onValueChange={(value) => handleMappingChange(tableName, fieldName, 'table', value)}
                        >
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select Table" />
                            </SelectTrigger>
                            <SelectContent>
                                {databases
                                    .find(db => db.name === selectedDb)
                                    ?.tables.map((table) => (
                                        <SelectItem key={table} value={table}>
                                            {table}
                                        </SelectItem>
                                    ))}
                            </SelectContent>
                        </Select>
                    )}

                    {selectedDb && selectedTable && (
                        <Select
                            value={mapping.field}
                            onValueChange={(value) => handleMappingChange(tableName, fieldName, 'field', value)}
                            disabled={isLoading}
                        >
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder={isLoading ? "Loading fields..." : "Select Field"} />
                            </SelectTrigger>
                            <SelectContent>
                                {availableFields[key]?.map((field) => (
                                    <SelectItem key={field.name} value={field.name}>
                                        {field.name} ({field.type})
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    )}
                </div>
            </div>
        );
    };

    const handleSave = async () => {
        console.log(mappings);
    };

    return (
        <div className="space-y-6 mt-6">
            {error && (
                <Alert variant="destructive">
                    <AlertDescription>{error}</AlertDescription>
                </Alert>
            )}

            <Card>
                <CardHeader>
                    <CardTitle>Users Table Mapping</CardTitle>
                </CardHeader>
                <CardContent>
                    {Object.keys(mappings.users).map(fieldName => 
                        renderFieldMapping('users', fieldName)
                    )}
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Assets Table Mapping</CardTitle>
                </CardHeader>
                <CardContent>
                    {Object.keys(mappings.assets).map(fieldName => 
                        renderFieldMapping('assets', fieldName)
                    )}
                </CardContent>
            </Card>

            <div className="flex justify-end">
                <Button 
                    onClick={handleSave}
                    disabled={Object.values(loading).some(Boolean)}
                >
                    {Object.values(loading).some(Boolean) && (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    Save Mappings
                </Button>
            </div>
        </div>
    );
};

export default DbMapping;