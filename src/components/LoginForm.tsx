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
      <div className="w-full max-w-lg">
        {/* Logo */}
        <Logo />

        {/* Welcome Text */}
        <div className="text-center mb-8">
          <h1 className="text-[40px] font-semibold text-[#121923] mb-4 leading-tight">
            Welcome Back to Gldcart
          </h1>
          <p className="text-[18px] text-[#40434a] leading-normal">
            Login to explore, customize, and shop unique creator-made
            <br />
            products.
          </p>
        </div>

        {/* Login Card */}
        <Card className="bg-white rounded-[37px] shadow-[0px_9px_4px_0px_rgba(0,0,0,0.25)] border-neutral-100 p-8">
          <CardContent className="space-y-6 p-0">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Email Field */}
              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-[18px] font-medium text-[#3f4247]"
                >
                  Email
                </Label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2">
                    <Mail className="size-5 text-[#989ba0]" />
                  </div>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="h-16 pl-12 rounded-[10px] border-[#e8e8e8] text-[20px] placeholder:text-[#989ba0] focus:ring-2 focus:ring-[#6241e5] focus:border-transparent"
                    {...register("email", { required: "Email is required" })}
                  />
                </div>
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <Label
                  htmlFor="password"
                  className="text-[18px] font-normal text-[#393b47]"
                >
                  Password
                </Label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2">
                    <Lock className="size-5 text-[#989ba0]" />
                  </div>
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="h-[67px] pl-12 pr-12 rounded-lg border-[#e8e8e8] text-[20px] placeholder:text-[#989ba0] focus:ring-2 focus:ring-[#6241e5] focus:border-transparent"
                    {...register("password", {
                      required: "Password is required",
                    })}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#989ba0] hover:text-gray-600"
                  >
                    {showPassword ? (
                      <EyeOff className="size-5" />
                    ) : (
                      <Eye className="size-5" />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-sm text-red-500">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Checkbox
                    id="rememberMe"
                    className="border-[#8a8a8a] data-[state=checked]:bg-[#6241e5] data-[state=checked]:border-[#6241e5]"
                    {...register("rememberMe")}
                  />
                  <Label
                    htmlFor="rememberMe"
                    className="text-[18px] font-normal text-[#393b47] cursor-pointer"
                  >
                    Remember me
                  </Label>
                </div>
                <button
                  type="button"
                  className="text-[18px] font-normal text-[#443eaa] hover:underline"
                >
                  Forgot Password?
                </button>
              </div>

              {/* Login Button */}
              <Button
                type="submit"
                className="w-full h-16 bg-gradient-to-r from-[#6241e5] to-[#7a39e8] text-white text-[20px] font-medium rounded-[10px] hover:from-[#5a3dd1] hover:to-[#6f35d3] transition-all duration-200"
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
                <span className="bg-white px-4 text-[15px] text-[#33383e]">
                  or
                </span>
              </div>
            </div>

            {/* Social Login Buttons */}
            <div className="space-y-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => handleSocialLogin("facebook")}
                className="w-full h-[71px] bg-white border-[#eaeaea] rounded-[11px] text-[20px] font-medium text-[#33383e] hover:bg-gray-50 transition-all duration-200"
              >
                <div className="flex items-center justify-center space-x-3">
                  <svg className="size-6" fill="none" viewBox="0 0 24 27">
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
                className="w-full h-[71px] bg-white border-[#e8e8e8] rounded-[11px] text-[20px] font-medium text-[#33383e] hover:bg-gray-50 transition-all duration-200"
              >
                <div className="flex items-center justify-center space-x-3">
                  <svg className="size-5" fill="none" viewBox="0 0 22 23">
                    <path d={svgPaths.p11faa600} fill="#E74E50" />
                  </svg>
                  <span>Login with Google</span>
                </div>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Sign Up Link */}
        <div className="text-center mt-8">
          <p className="text-[20px] font-medium text-[#4d4d55]">
            Don&apos;t have an account?{" "}
            <button className="text-[#783ae8] hover:underline">Signup</button>
          </p>
        </div>
      </div>
    </div>
  );
}
