
import React from 'react';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, User, ArrowRight } from "lucide-react";

const communityPosts = [
  {
    id: 1,
    title: "Help with calculus integration techniques",
    excerpt: "I'm struggling with advanced integration by parts. Can someone explain when to use different methods?",
    author: {
      name: "Alex P.",
      avatar: "https://i.pravatar.cc/150?img=1",
      initials: "AP"
    },
    replies: 12,
    views: 134,
    tags: ["Calculus", "Math"]
  },
  {
    id: 2,
    title: "Quantum mechanics study group forming",
    excerpt: "Looking for fellow physics students to join a weekly study session on quantum mechanics fundamentals.",
    author: {
      name: "Sarah K.",
      avatar: "https://i.pravatar.cc/150?img=5",
      initials: "SK"
    },
    replies: 8,
    views: 96,
    tags: ["Physics", "Quantum"]
  },
  {
    id: 3,
    title: "Literature analysis help - The Great Gatsby",
    excerpt: "Working on a paper about symbolism in The Great Gatsby. Would appreciate insights!",
    author: {
      name: "Miguel L.",
      avatar: "https://i.pravatar.cc/150?img=8",
      initials: "ML"
    },
    replies: 19,
    views: 205,
    tags: ["Literature", "English"]
  }
];

const topContributors = [
  {
    name: "Dr. Hailey J.",
    role: "Physics Professor",
    avatar: "https://i.pravatar.cc/150?img=10",
    initials: "HJ",
    contributions: 432
  },
  {
    name: "Marcus T.",
    role: "Math Tutor",
    avatar: "https://i.pravatar.cc/150?img=11",
    initials: "MT", 
    contributions: 347
  },
  {
    name: "Lin W.",
    role: "Computer Science TA",
    avatar: "https://i.pravatar.cc/150?img=9",
    initials: "LW",
    contributions: 289
  },
  {
    name: "Priya S.",
    role: "Biology Student",
    avatar: "https://i.pravatar.cc/150?img=12",
    initials: "PS",
    contributions: 203
  }
];

const Community = () => {
  return (
    <section id="community" className="py-16">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4">Worldwide Student Community</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect with students and experts from around the globe. Learn together, solve problems, and share knowledge.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold mb-6">Active Discussions</h3>
            <div className="space-y-4">
              {communityPosts.map((post) => (
                <Card key={post.id} className="card-hover">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl">{post.title}</CardTitle>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MessageSquare className="h-4 w-4 mr-1" />
                        <span>{post.replies}</span>
                      </div>
                    </div>
                    <div className="flex gap-2 mt-1">
                      {post.tags.map((tag, index) => (
                        <span key={index} className="text-xs bg-secondary px-2 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">{post.excerpt}</CardDescription>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={post.author.avatar} alt={post.author.name} />
                          <AvatarFallback>{post.author.initials}</AvatarFallback>
                        </Avatar>
                        <span className="text-sm font-medium">{post.author.name}</span>
                      </div>
                      <Button variant="ghost" size="sm" className="text-primary">
                        View discussion <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Button variant="outline" className="mx-auto">
                View All Discussions
              </Button>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Top Contributors</CardTitle>
                <CardDescription>
                  Meet our most active community members
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topContributors.map((contributor, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src={contributor.avatar} alt={contributor.name} />
                          <AvatarFallback>{contributor.initials}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{contributor.name}</div>
                          <div className="text-sm text-muted-foreground">{contributor.role}</div>
                        </div>
                      </div>
                      <div className="text-sm">
                        <span className="font-semibold text-primary">{contributor.contributions}</span> posts
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-brand-purple/10 to-brand-blue/10 border-primary/20">
              <CardHeader>
                <CardTitle>Join The Discussion</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-6">
                  Have questions? Need help with your studies? Join our vibrant community of learners today.
                </p>
                <Button className="w-full btn-primary">
                  Start Participating <User className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
