import { AuthLayout } from "@/components/AuthLayout"
import { LoginForm } from "@/components/LoginForm"

export const metadata = {
  title: "Connexion - ActuFlow",
  description: "Connectez-vous à votre compte ActuFlow",
}

export default function LoginPage() {
  return (
    <AuthLayout
      title="Bienvenue !"
      description="Restez informé des dernières actualités du monde entier en temps réel."
    >
      <LoginForm />
    </AuthLayout>
  )
}
