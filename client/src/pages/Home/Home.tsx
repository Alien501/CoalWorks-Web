import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, LineChart, PieChart, Line, Pie, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Button } from "@/components/ui/button";
import LBar from "@/components/mine/LBar/Lbar";
import MapComponent from "../Map/MapComponent";

const Home = () => {
  const navigate = useNavigate();

  const menuItemClicked = (path: string) => {
    navigate(path);
  };

  const barData = [
    { name: 'Jan', value: 400 },
    { name: 'Feb', value: 300 },
    { name: 'Mar', value: 200 },
    { name: 'Apr', value: 278 },
    { name: 'May', value: 189 },
  ];

  const lineData = [
    { name: 'Mon', value: 20 },
    { name: 'Tue', value: 30 },
    { name: 'Wed', value: 45 },
    { name: 'Thu', value: 35 },
    { name: 'Fri', value: 49 },
  ];

  const pieData = [
    { name: 'Mine 1', value: 400 },
    { name: 'Mine 2', value: 300 },
    { name: 'Mine 3', value: 300 },
    { name: 'Mine 4', value: 200 },
  ];

  return (
    <div className="flex h-screen">
      <LBar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-x-hidden overflow-y-auto my-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full lg:w-1/2 px-4 mb-8">
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>Dashboard</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                      <Button onClick={() => menuItemClicked('/manage-worker')}>Manage Workers</Button>
                      <Button onClick={() => menuItemClicked('/assign-works')}>Assign Works</Button>
                      <Button onClick={() => menuItemClicked('/generate-report')}>Generate Report</Button>
                    </div>
                    <div className="space-y-8">
                      <Card>
                        <CardHeader>
                          <CardTitle>Monthly Performance</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ResponsiveContainer width="100%" height={200}>
                            <BarChart data={barData}>
                              <CartesianGrid strokeDasharray="3 3" />
                              <XAxis dataKey="name" />
                              <YAxis />
                              <Tooltip />
                              <Bar dataKey="value" fill="#8884d8" />
                            </BarChart>
                          </ResponsiveContainer>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader>
                          <CardTitle>Weekly Productivity</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ResponsiveContainer width="100%" height={200}>
                            <LineChart data={lineData}>
                              <CartesianGrid strokeDasharray="3 3" />
                              <XAxis dataKey="name" />
                              <YAxis />
                              <Tooltip />
                              <Line type="monotone" dataKey="value" stroke="#8884d8" />
                            </LineChart>
                          </ResponsiveContainer>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader>
                          <CardTitle>Production</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ResponsiveContainer width="100%" height={200}>
                            <PieChart>
                              <Pie
                                data={pieData}
                                dataKey="value"
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                outerRadius={80}
                                fill="#8884d8"
                                label
                              />
                              <Tooltip />
                            </PieChart>
                          </ResponsiveContainer>
                        </CardContent>
                      </Card>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="w-full lg:w-1/2 px-4 mb-8">
                <Card className="h-fit">
                  <CardHeader>
                    <CardTitle>Site Map</CardTitle>
                  </CardHeader>
                  <CardContent className="h-[calc(100vh-200px)]">
                    <MapComponent />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;