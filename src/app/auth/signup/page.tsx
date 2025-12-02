import { AuthLayout } from "@/components/AuthLayout"
import { SignupForm } from "@/components/SignupForm"

export const metadata = {
  title: "Inscription - ActuFlow",
  description: "Créez un compte ActuFlow",
}

export default function SignupPage() {
  return (
    <AuthLayout
      title="Rejoignez-nous !"
      description="Inscrivez-vous pour accéder à tous les articles et créer votre expérience d'actualités personnalisée."
    >
      <SignupForm />
    </AuthLayout>
  )
}
