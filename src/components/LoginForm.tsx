"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Checkbox } from "./ui/checkbox";
import { Card, CardContent } from "./ui/card";
import { Logo } from "./Logo";
import svgPaths from "../imports/svg-xcm8kl25yl";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";

interface LoginFormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginFormData>();

  const onSubmit = (data: LoginFormData) => {
    console.log("Login data:", data);
    // Handle login logic here
  };

  const handleSocialLogin = (provider: "google" | "facebook") => {
    console.log(`Login with ${provider}`);
    // Handle social login logic here
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <Logo />

        {/* Welcome Text */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-semibold text-[#121923] mb-2 leading-tight">
            Welcome Back to Gldcart
          </h1>
          <p className="text-sm text-[#40434a] leading-normal">
            Login to explore, customize, and shop unique creator-made products.
          </p>
        </div>

        {/* Login Card */}
        <Card className="bg-white rounded-2xl shadow-lg border-neutral-100 p-6">
          <CardContent className="space-y-4 p-0">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Email Field */}
              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-sm font-medium text-[#3f4247]"
                >
                  Email
                </Label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2">
                    <Mail className="size-4 text-[#989ba0]" />
                  </div>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="h-12 pl-10 rounded-lg border-[#e8e8e8] text-sm placeholder:text-[#989ba0] focus:ring-2 focus:ring-[#6241e5] focus:border-transparent"
                    {...register("email", { required: "Email is required" })}
                  />
                </div>
                {errors.email && (
                  <p className="text-xs text-red-500">{errors.email.message}</p>
                )}
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <Label
                  htmlFor="password"
                  className="text-sm font-normal text-[#393b47]"
                >
                  Password
                </Label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2">
                    <Lock className="size-4 text-[#989ba0]" />
                  </div>
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="h-12 pl-10 pr-10 rounded-lg border-[#e8e8e8] text-sm placeholder:text-[#989ba0] focus:ring-2 focus:ring-[#6241e5] focus:border-transparent"
                    {...register("password", {
                      required: "Password is required",
                    })}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#989ba0] hover:text-gray-600"
                  >
                    {showPassword ? (
                      <EyeOff className="size-4" />
                    ) : (
                      <Eye className="size-4" />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-xs text-red-500">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="rememberMe"
                    className="border-[#8a8a8a] data-[state=checked]:bg-[#6241e5] data-[state=checked]:border-[#6241e5]"
                    {...register("rememberMe")}
                  />
                  <Label
                    htmlFor="rememberMe"
                    className="text-sm font-normal text-[#393b47] cursor-pointer"
                  >
                    Remember me
                  </Label>
                </div>
                <button
                  type="button"
                  className="text-sm font-normal text-[#443eaa] hover:underline"
                >
                  Forgot Password?
                </button>
              </div>

              {/* Login Button */}
              <Button
                type="submit"
                className="w-full h-12 bg-gradient-to-r from-[#6241e5] to-[#7a39e8] text-white text-sm font-medium rounded-lg hover:from-[#5a3dd1] hover:to-[#6f35d3] transition-all duration-200"
              >
                Login
              </Button>
            </form>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-dashed border-[#efefef]"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-3 text-xs text-[#33383e]">
                  or
                </span>
              </div>
            </div>

            {/* Social Login Buttons */}
            <div className="space-y-3">
              <Button
                type="button"
                variant="outline"
                onClick={() => handleSocialLogin("facebook")}
                className="w-full h-12 bg-white border-[#eaeaea] rounded-lg text-sm font-medium text-[#33383e] hover:bg-gray-50 transition-all duration-200"
              >
                <div className="flex items-center justify-center space-x-2">
                  <svg className="size-4" fill="none" viewBox="0 0 24 27">
                    <path d={svgPaths.p121574c0} fill="#285CE6" />
                    <path d={svgPaths.p38169600} fill="#285CE6" />
                  </svg>
                  <span>Login with Facebook</span>
                </div>
              </Button>

              <Button
                type="button"
                variant="outline"
                onClick={() => handleSocialLogin("google")}
                className="w-full h-12 bg-white border-[#e8e8e8] rounded-lg text-sm font-medium text-[#33383e] hover:bg-gray-50 transition-all duration-200"
              >
                <div className="flex items-center justify-center space-x-2">
                  <svg className="size-4" fill="none" viewBox="0 0 22 23">
                    <path d={svgPaths.p11faa600} fill="#E74E50" />
                  </svg>
                  <span>Login with Google</span>
                </div>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Sign Up Link */}
        <div className="text-center mt-6">
          <p className="text-sm font-medium text-[#4d4d55]">
            Don&apos;t have an account?{" "}
            <button className="text-[#783ae8] hover:underline">Signup</button>
          </p>
        </div>
      </div>
    </div>
  );
}
