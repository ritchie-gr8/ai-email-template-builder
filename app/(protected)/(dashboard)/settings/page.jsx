"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useUserDetail } from "@/provider/Provider";
import { Loader2 } from "lucide-react";
import { updateUserDetail } from "@/actions/convex";
import { toast } from "sonner";

const UserSettingsPage = () => {
  const [name, setName] = useState('');
  const [image, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [email, setEmail] = useState('');
  const { userDetail, setUserDetail } = useUserDetail();
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
      setPreviewImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name.trim().length === 0) {
        toast.error('Error', {
            description: 'Name is required.'
        })
        return
    }

    setLoading(true);
    try {
      const res = await updateUserDetail(
        userDetail?._id,
        userDetail?.email,
        name
      );

      if (res.status !== 200 || !res.data)
        throw new Error("Failed to update user detail.");

      setUserDetail(res.data);
      toast.success("Success", {
        description: "User updated successfully.",
      });
    } catch (error) {
      toast.error("Error", {
        description: error,
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setName(userDetail?.name);
    setImage(userDetail?.picture);
    setPreviewImage(userDetail?.picture);
    setEmail(userDetail?.email);
  }, [userDetail]);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Manage account</h1>
        {/* <Link href={"/dashboard"}>
          <Button variant="outline">Back to Dashboard</Button>
        </Link> */}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Profile Information</CardTitle>
          <CardDescription>
            Update your personal information and profile picture.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex flex-col items-center space-y-4">
                <Avatar className="w-32 h-32">
                  {previewImage ? (
                    <AvatarImage src={previewImage} alt="User" />
                  ) : (
                    <AvatarFallback className="text-4xl bg-primary text-primary-foreground">
                      {name?.charAt(0)}
                    </AvatarFallback>
                  )}
                </Avatar>
                {/* <div className="flex flex-col items-center">
                  <Label
                    htmlFor="picture"
                    className="cursor-pointer bg-pink-100 text-pink-500 px-4 py-2 rounded-md hover:bg-pink-200 transition-colors"
                  >
                    Change Picture
                  </Label>
                  <Input
                    id="picture"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                </div> */}
              </div>

              <div className="flex-1 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="placeholder:text-gray-400"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    value={email}
                    disabled
                    className="bg-gray-100"
                  />
                  <p className="text-xs text-gray-500">
                    Email cannot be changed
                  </p>
                </div>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-end">
          {/* <Button variant="outline" className="mr-2">
            Cancel
          </Button> */}
          <Button onClick={handleSubmit} disabled={loading}>
            Save Changes {loading && <Loader2 className="animate-spin" />}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default UserSettingsPage;
