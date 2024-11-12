import LBar from "@/components/mine/LBar/Lbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

interface DbType {
    name: string,
    value: string
}

const MigrateForm = () => {
    const dbTypes: DbType[] = [
        {
            name: "MySQL",
            value: 'mysql'
        },
        {
            name: "PostgresSQL",
            value: "psql"
        },
        {
            name: "SQL Server",
            value: "sqlserver"
        },
        {
            name: "Oracle",
            value: "oracle"
        }
    ]

    return(
        <div id="migrate-form">
            <Card className="shadow-none">
                <CardContent className="min-w-[300px] min-h-[100px] p-2">
                    <div className="grid grid-cols-[30%_70%] items-center justify-center my-2">
                        <Label>
                            Existing DB URI
                        </Label>
                        <Input
                            placeholder="Connection URI"
                            name="curi"
                            className="w-52"
                        />
                    </div>
                    <div className="grid grid-cols-[250px_600px] items-center justify-center my-2">
                        <Label>
                            Database
                        </Label>
                        <Select name="dbtype" className="w-52">
                            <SelectTrigger>
                                <SelectValue placeholder="Hello" />
                            </SelectTrigger>
                            <SelectContent>
                                {dbTypes.map(db => <SelectItem value={db.value}>{db.name}</SelectItem>)}
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="grid grid-cols-[250px_600px] items-center justify-center my-2">
                        <Label>
                            Username
                        </Label>
                        <Input
                            name="uname"
                            placeholder="root"
                            className="w-52"
                        />
                    </div>
                    <div className="grid grid-cols-[250px_600px] items-center justify-center my-2">
                        <Label>
                            Password
                        </Label>
                        <Input
                            name="pwd"
                            placeholder="root"
                            className="w-52"
                        />
                    </div>
                    <div className="flex items-center justify-center">
                        <Button>Check Connection</Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

const Migrate = () => {
    const onCheckButtonClicked = (e: React.FormEvent) => {
        e.preventDefault();
        const form = new FormData(e);
        const answer = form.entries();
        console.log(answer)
    }
    return(
        <div id="migrate-container" className="w-full h-screen overflow-hidden">
            <LBar />
            <div className="my-14 ml-14 mr-2 w-full h-full flex justify-center items-center">
                <form onSubmit={onCheckButtonClicked}>
                    <MigrateForm />
                </form>
            </div>
        </div>
    )
}

export default Migrate;