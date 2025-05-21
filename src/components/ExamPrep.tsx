
import * as React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, GraduationCap, FileText, Award, ChartBar, Pencil } from "lucide-react";

const examTypes = [
  {
    id: "board",
    name: "Board Exams",
    icon: <BookOpen className="h-5 w-5" />,
    description: "Comprehensive preparation for CBSE, ICSE, and State Board exams with subject-wise guides and practice tests.",
    subjects: ["Mathematics", "Science", "English", "Social Studies"],
    features: ["Chapter-wise notes", "Previous year papers", "Mock tests", "Expert tips"]
  },
  {
    id: "jee",
    name: "JEE Main",
    icon: <GraduationCap className="h-5 w-5" />,
    description: "Strategic preparation for JEE Main with concept clarity, problem-solving techniques, and full-length practice tests.",
    subjects: ["Physics", "Chemistry", "Mathematics"],
    features: ["Concept videos", "Daily practice problems", "Test series", "Rank predictor"]
  },
  {
    id: "neet",
    name: "NEET",
    icon: <Award className="h-5 w-5" />,
    description: "Systematic preparation for NEET with comprehensive coverage of Biology, Physics, and Chemistry topics.",
    subjects: ["Biology", "Physics", "Chemistry"],
    features: ["NCERT-based learning", "MCQ practice", "Full syllabus tests", "Expert mentoring"]
  },
  {
    id: "upsc",
    name: "UPSC",
    icon: <FileText className="h-5 w-5" />,
    description: "Structured preparation for UPSC Civil Services with coverage of Prelims, Mains, and Interview stages.",
    subjects: ["General Studies", "CSAT", "Optional Subjects"],
    features: ["Daily current affairs", "Answer writing practice", "Test series", "Interview preparation"]
  },
  {
    id: "ssc",
    name: "SSC",
    icon: <ChartBar className="h-5 w-5" />,
    description: "Focused preparation for SSC exams with topic-wise practice and speed-building techniques.",
    subjects: ["Quantitative Aptitude", "English", "Reasoning", "General Awareness"],
    features: ["Topic-wise tests", "Previous papers", "Speed techniques", "Sectional practice"]
  },
];

const ExamPrep = () => {
  const [activeExam, setActiveExam] = React.useState("board");
  
  return (
    <section id="exam-prep" className="py-16 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="mb-4">Competitive Exam Preparation</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Personalized study plans and resources tailored for your success in competitive exams.
          </p>
        </div>

        <Tabs defaultValue="board" className="w-full" onValueChange={setActiveExam}>
          <div className="flex justify-center mb-8">
            <TabsList className="bg-slate-100 dark:bg-slate-800 p-1 rounded-full">
              {examTypes.map((exam) => (
                <TabsTrigger 
                  key={exam.id} 
                  value={exam.id}
                  className="rounded-full px-6 py-2 data-[state=active]:shadow-lg data-[state=active]:bg-white dark:data-[state=active]:bg-slate-700"
                >
                  <span className="flex items-center gap-2">
                    {exam.icon}
                    <span className="hidden sm:inline">{exam.name}</span>
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {examTypes.map((exam) => (
            <TabsContent key={exam.id} value={exam.id} className="animate-fade-in">
              <div className="grid md:grid-cols-5 gap-8">
                <div className="md:col-span-2 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold mb-4 flex items-center gap-2">
                    {exam.icon} {exam.name}
                  </h3>
                  <p className="text-muted-foreground mb-6">{exam.description}</p>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-2 flex items-center">
                      <Pencil className="h-4 w-4 mr-2" /> Key Subjects
                    </h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {exam.subjects.map((subject, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="w-2 h-2 rounded-full bg-brand-purple mr-2" />
                          {subject}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button className="btn-primary rounded-full w-full md:w-auto">
                    Start Your Personalized Prep
                  </Button>
                </div>
                <div className="md:col-span-3 bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden">
                  <div className="h-full p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h4 className="text-xl font-semibold">Your Personal Guide</h4>
                      <span className="bg-brand-purple/10 text-brand-purple px-3 py-1 rounded-full text-sm font-medium">
                        AI-Powered
                      </span>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      {exam.features.map((feature, idx) => (
                        <Card key={idx} className="border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 hover:shadow-md transition-all">
                          <CardHeader className="p-4 pb-2">
                            <CardTitle className="text-lg">{feature}</CardTitle>
                          </CardHeader>
                          <CardContent className="p-4 pt-0">
                            <CardDescription>
                              Personalized content adapted to your learning pace and style.
                            </CardDescription>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                    <div className="mt-6 p-4 bg-slate-100 dark:bg-slate-700 rounded-lg">
                      <h5 className="font-medium mb-2">Success Roadmap</h5>
                      <div className="flex">
                        <div className="relative flex items-center justify-center">
                          <div className="h-full w-0.5 bg-slate-300 dark:bg-slate-600 absolute"></div>
                          {[1, 2, 3].map((step) => (
                            <div key={step} className="w-8 h-8 rounded-full bg-brand-purple text-white flex items-center justify-center z-10 my-6">
                              {step}
                            </div>
                          ))}
                        </div>
                        <div className="ml-4 flex flex-col justify-between py-2">
                          <div className="my-4">
                            <h6 className="font-medium">Assessment</h6>
                            <p className="text-sm text-muted-foreground">Evaluate your current knowledge level</p>
                          </div>
                          <div className="my-4">
                            <h6 className="font-medium">Personalized Plan</h6>
                            <p className="text-sm text-muted-foreground">Get a customized study schedule</p>
                          </div>
                          <div className="my-4">
                            <h6 className="font-medium">Track Progress</h6>
                            <p className="text-sm text-muted-foreground">Monitor improvements and adapt your strategy</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-16 text-center">
          <p className="text-lg mb-4">Join thousands of students achieving their academic goals</p>
          <Button variant="outline" className="rounded-full hover:bg-brand-purple hover:text-white border-brand-purple text-brand-purple">
            View Success Stories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ExamPrep;
