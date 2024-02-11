'use client';

import { useRouter } from "next/navigation";

interface LoginButtonProps {
  children: React.ReactNode;
  mode?: 'modal' | 'redirect';
  route?: string;
  asChild?: boolean;
}

export const LoginButton = ({
  children,
  mode = 'redirect',
  route = '/auth/login',
  asChild,
}: LoginButtonProps) => {
  const router = useRouter()

  const onClick = () => {
    router.push(route)
  };

  if (mode === 'modal') {
    return <span>TODO: Implement modal</span>
  }

  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  )
}
