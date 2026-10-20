import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      fullName,
      businessName,
      email,
      phone,
      enquiryType,
      categories,
      estimatedQuantity,
      productOfInterest,
      message,
    } = body;

    // Server-side validation
    if (!fullName || typeof fullName !== "string" || fullName.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: "Full Name is required." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { success: false, error: "A valid email address is required." },
        { status: 400 }
      );
    }

    if (!phone || typeof phone !== "string" || phone.trim().length < 6) {
      return NextResponse.json(
        { success: false, error: "A valid phone number is required." },
        { status: 400 }
      );
    }

    if (!enquiryType || typeof enquiryType !== "string") {
      return NextResponse.json(
        { success: false, error: "Please select an enquiry type." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: "Message / Requirements are required." },
        { status: 400 }
      );
    }

    const enquiryId = `TW-${Date.now().toString().slice(-6)}-${Math.floor(Math.random() * 900 + 100)}`;

    // In a production system, this sends an email via SendGrid/Resend or forwards to HubSpot/Salesforce CRM
    console.log("New Wholesale Toy Enquiry Received:", {
      enquiryId,
      timestamp: new Date().toISOString(),
      fullName,
      businessName,
      email,
      phone,
      enquiryType,
      categories,
      estimatedQuantity,
      productOfInterest,
      message,
    });

    return NextResponse.json({
      success: true,
      enquiryId,
      message: "Your wholesale toy enquiry has been received successfully.",
    });
  } catch (error) {
    console.error("Error processing enquiry submission:", error);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred while submitting your enquiry. Please try again or contact us directly.",
      },
      { status: 500 }
    );
  }
}
