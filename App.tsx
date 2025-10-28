import { useState } from "react";
import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card";
import { Progress } from "./components/ui/progress";
import { StepIndicator } from "./components/signup/StepIndicator";
import { Step1Basic } from "./components/signup/Step1Basic";
import { Step2Profile } from "./components/signup/Step2Profile";
import { Step3TodoPreferences } from "./components/signup/Step3TodoPreferences";
import { Step4CalendarPreferences } from "./components/signup/Step4CalendarPreferences";
import { Step5Customization } from "./components/signup/Step5Customization";
import { Step6Summary } from "./components/signup/Step6Summary";
import { ArrowLeft, ArrowRight, CheckCircle2, ListChecks } from "lucide-react";
import { toast } from "sonner@2.0.3";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<any>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const stepTitles = [
    "Compte",
    "Profil",
    "Tâches",
    "Calendrier",
    "Style",
    "Validation",
  ];

  const totalSteps = 6;

  const updateFormData = (data: any) => {
    setFormData((prev: any) => ({ ...prev, ...data }));
  };

  const validateStep = (step: number): boolean => {
    const errors: Record<string, string> = {};
    
    switch (step) {
      case 1:
        // Vérifier que tous les champs sont remplis
        if (!formData.firstName || formData.firstName.trim() === "") {
          errors.firstName = "Le prénom est requis";
        }
        if (!formData.lastName || formData.lastName.trim() === "") {
          errors.lastName = "Le nom est requis";
        }
        if (!formData.email || formData.email.trim() === "") {
          errors.email = "L'email est requis";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          errors.email = "Veuillez saisir une adresse email valide";
        }
        
        if (!formData.password || formData.password === "") {
          errors.password = "Le mot de passe est requis";
        } else {
          // Validation du mot de passe : 8 caractères, 1 majuscule, 1 chiffre, 1 caractère spécial
          if (formData.password.length < 8) {
            errors.password = "Le mot de passe doit contenir au moins 8 caractères";
          } else if (!/[A-Z]/.test(formData.password)) {
            errors.password = "Le mot de passe doit contenir au moins 1 majuscule";
          } else if (!/[0-9]/.test(formData.password)) {
            errors.password = "Le mot de passe doit contenir au moins 1 chiffre";
          } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(formData.password)) {
            errors.password = "Le mot de passe doit contenir au moins 1 caractère spécial";
          }
        }
        
        if (!formData.confirmPassword || formData.confirmPassword === "") {
          errors.confirmPassword = "La confirmation du mot de passe est requise";
        } else if (formData.password !== formData.confirmPassword) {
          errors.confirmPassword = "Les mots de passe ne correspondent pas";
        }
        
        setFieldErrors(errors);
        
        if (Object.keys(errors).length > 0) {
          toast.error("Veuillez corriger les erreurs dans le formulaire");
          return false;
        }
        return true;
      default:
        setFieldErrors({});
        return true;
    }
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setFieldErrors({});
      if (currentStep < totalSteps) {
        setCurrentStep(currentStep + 1);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setFieldErrors({});
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Simulation de la création du compte
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    toast.success("Compte créé avec succès !", {
      description: "Bienvenue dans votre nouvelle application ToDoList & Calendrier",
    });
    
    console.log("Données du formulaire :", formData);
    setIsSubmitting(false);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1Basic formData={formData} updateFormData={updateFormData} errors={fieldErrors} />;
      case 2:
        return <Step2Profile formData={formData} updateFormData={updateFormData} />;
      case 3:
        return <Step3TodoPreferences formData={formData} updateFormData={updateFormData} />;
      case 4:
        return <Step4CalendarPreferences formData={formData} updateFormData={updateFormData} />;
      case 5:
        return <Step5Customization formData={formData} updateFormData={updateFormData} />;
      case 6:
        return <Step6Summary formData={formData} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-muted/30 py-8 px-4">
      <Toaster />
      <div className="max-w-3xl mx-auto">
        {/* En-tête */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-2xl mb-4">
            <ListChecks className="w-8 h-8" />
          </div>
          <h1>Créer votre compte</h1>
          <p className="text-muted-foreground mt-2">
            Votre nouvelle application ToDoList & Calendrier vous attend
          </p>
        </div>

        {/* Indicateur de progression */}
        <div className="mb-6">
          <Progress value={(currentStep / totalSteps) * 100} className="h-2" />
          <p className="text-sm text-muted-foreground text-center mt-2">
            Étape {currentStep} sur {totalSteps}
          </p>
        </div>

        {/* Indicateur d'étapes */}
        <StepIndicator
          currentStep={currentStep}
          totalSteps={totalSteps}
          stepTitles={stepTitles}
        />

        {/* Contenu du formulaire */}
        <Card className="p-6 md:p-8 mb-6">
          <div className="min-h-[400px]">{renderStep()}</div>
        </Card>

        {/* Boutons de navigation */}
        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentStep === 1}
            className="gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Précédent
          </Button>

          {currentStep < totalSteps ? (
            <Button onClick={handleNext} className="gap-2">
              Suivant
              <ArrowRight className="w-4 h-4" />
            </Button>
          ) : (
            <Button onClick={handleSubmit} disabled={isSubmitting} className="gap-2">
              {isSubmitting ? (
                <>
                  <span className="animate-spin">⏳</span>
                  Création en cours...
                </>
              ) : (
                <>
                  <CheckCircle2 className="w-4 h-4" />
                  Créer mon compte
                </>
              )}
            </Button>
          )}
        </div>

        {/* Pied de page */}
        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            Vous avez déjà un compte ?{" "}
            <a href="#" className="text-primary hover:underline">
              Se connecter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
