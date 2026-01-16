'use client'
import { useState } from 'react';

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);

    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Input Field */}
            <div>
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                    Địa chỉ Email
                </label>
                <div className="mt-2">
                    <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="example@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="block w-full rounded-md border-0 py-2.5 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition-all duration-200"
                    />
                </div>
            </div>

            {/* Password Input Field */}
            <div>
                <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-semibold leading-6 text-gray-900">
                        Mật khẩu
                    </label>
                    <div className="text-sm">
                        <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500 hover:underline">
                            Quên mật khẩu?
                        </a>
                    </div>
                </div>
                <div className="mt-2">
                    <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="block w-full rounded-md border-0 py-2.5 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition-all duration-200"
                    />
                </div>
            </div>

            {/* Submit Button */}
            <div>
                <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors duration-200"
                >
                    Đăng nhập
                </button>
            </div>
        </form>
    );
}