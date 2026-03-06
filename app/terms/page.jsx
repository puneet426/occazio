import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TermsAndConditions() {
  const lastUpdated = "March 7, 2026";

  return (
    <div className="min-h-screen bg-background py-12 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Button variant="ghost" asChild className="mb-8 -ml-4 text-muted-foreground hover:text-foreground">
          <Link href="/">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </Button>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Terms and Conditions</h1>
          <p className="text-muted-foreground">Last Updated: {lastUpdated}</p>
        </div>

        {/* Content */}
        <div className="space-y-8 text-muted-foreground leading-relaxed">
          
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the Occazi platform ("Occazi", "we", "us", or "our"), you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services. Occazi provides a platform for users to create, manage, share, and register for events.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">2. User Accounts</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Registration:</strong> You must create an account via our supported authentication providers (e.g., Clerk) to host or register for events.</li>
              <li><strong>Account Security:</strong> You are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account.</li>
              <li><strong>Accuracy:</strong> You agree to provide accurate, current, and complete information during the registration process.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">3. Event Organizers</h2>
            <p>If you create and host events on  ("Organizer"), you agree to the following:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Event Content:</strong> You are solely responsible for the accuracy, legality, and safety of your events. You may not host events that promote illegal activities, violence, hate speech, or explicit content.</li>
              <li><strong>Ticketing & Pricing:</strong> You determine the ticket price for paid events.  acts solely as an intermediary platform.</li>
              <li><strong>Refunds:</strong> Organizers are responsible for setting and communicating their own refund policies to Attendees.  is not responsible for issuing refunds for canceled or altered events.</li>
              <li><strong>Subscriptions ( Pro):</strong> Free accounts are limited to creating 1 active event. To create unlimited events and access premium features (like custom themes), Organizers may upgrade to  Pro. Pro subscriptions are billed monthly. Free trials are limited to one per user.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">4. Attendees & Ticket Purchases</h2>
            <p>If you register for or purchase tickets to an event ("Attendee"), you agree to the following:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Purchases:</strong> All paid ticket transactions are processed securely through our third-party payment gateway, Dodo Payments.</li>
              <li><strong>Liability:</strong>  does not organize or guarantee the quality, safety, or legality of the events listed on our platform. Your attendance at any event is at your own risk.</li>
              <li><strong>Cancellations:</strong> If an event is canceled by the Organizer, you must contact the Organizer directly regarding refunds or compensation.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">5. Payments and Fees</h2>
            <p>
               uses Dodo Payments as our Merchant of Record and payment processor. By making a purchase or receiving a payout on , you agree to Dodo Payments' applicable terms of service.  and Dodo Payments reserve the right to withhold funds or cancel transactions suspected of fraud or violation of these terms.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">6. Intellectual Property</h2>
            <p>
              The  platform, including its code, design, logos, and branding, is the intellectual property of . You may not copy, modify, or distribute our intellectual property without prior written consent. Organizers retain full ownership of the text, images, and content they upload for their specific events.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">7. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law,  and its operators shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or goodwill, arising out of your use of the platform, attendance at any event, or the conduct of any Organizer or Attendee.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">8. Termination</h2>
            <p>
              We reserve the right to suspend or terminate your account and access to  at our sole discretion, without notice or liability, for any reason, including if you breach these Terms and Conditions.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">9. Contact Information</h2>
            <p>
              If you have any questions or concerns about these Terms and Conditions, please contact us at:
              <br />
              <a href="mailto:occazi@gmail.com" className="text-purple-500 hover:text-purple-400 font-medium mt-2 inline-block">
                occazi@gmail.com
              </a>
            </p>
          </section>
        </div>
        
        {/* Footer spacing */}
        <div className="mt-16 border-t pt-8 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} . All rights reserved.
        </div>
      </div>
    </div>
  );
}