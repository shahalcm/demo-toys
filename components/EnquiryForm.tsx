"use client";

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Package,
  RotateCcw,
  ArrowLeft,
  ShieldCheck,
} from "lucide-react";
import { toyCategories } from "@/data/categories";

interface FormData {
  fullName: string;
  businessName: string;
  email: string;
  phone: string;
  enquiryType: string;
  categories: string[];
  estimatedQuantity: string;
  productOfInterest: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  enquiryType?: string;
  message?: string;
}

export default function EnquiryForm() {
  const searchParams = useSearchParams();

  const initialProduct = searchParams?.get("product") || "";
  const initialCategory = searchParams?.get("category") || "";

  const [formData, setFormData] = useState<FormData>(() => ({
    fullName: "",
    businessName: "",
    email: "",
    phone: "",
    enquiryType: initialProduct ? "Product Availability" : "",
    categories: initialCategory ? [initialCategory] : [],
    estimatedQuantity: "",
    productOfInterest: initialProduct,
    message: initialProduct
      ? `Hello, I would like to enquire about wholesale pricing, minimum order quantities, and carton availability for "${initialProduct}".`
      : "",
  }));

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [submittedId, setSubmittedId] = useState<string>("");
  const [apiError, setApiError] = useState<string | null>(null);

  const validateField = (name: keyof FormData, value: string | string[]): string | undefined => {
    switch (name) {
      case "fullName":
        if (typeof value !== "string" || !value.trim()) {
          return "Please enter your full name.";
        }
        return undefined;
      case "email":
        if (typeof value !== "string" || !value.trim()) {
          return "Please enter your business email.";
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          return "Please provide a valid email address (e.g. name@company.com).";
        }
        return undefined;
      case "phone":
        if (typeof value !== "string" || !value.trim()) {
          return "Please enter your contact phone number.";
        }
        if (value.trim().length < 7) {
          return "Please enter a valid phone number (at least 7 digits).";
        }
        return undefined;
      case "enquiryType":
        if (!value || typeof value !== "string") {
          return "Please select an enquiry type from the dropdown.";
        }
        return undefined;
      case "message":
        if (typeof value !== "string" || !value.trim()) {
          return "Please describe your toy requirements or questions.";
        }
        return undefined;
      default:
        return undefined;
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear field-level error on change
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleCategoryToggle = (categoryTitle: string) => {
    setFormData((prev) => {
      const exists = prev.categories.includes(categoryTitle);
      const updated = exists
        ? prev.categories.filter((c) => c !== categoryTitle)
        : [...prev.categories, categoryTitle];
      return { ...prev, categories: updated };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setApiError(null);

    const newErrors: FormErrors = {};
    const fullNameErr = validateField("fullName", formData.fullName);
    if (fullNameErr) newErrors.fullName = fullNameErr;

    const emailErr = validateField("email", formData.email);
    if (emailErr) newErrors.email = emailErr;

    const phoneErr = validateField("phone", formData.phone);
    if (phoneErr) newErrors.phone = phoneErr;

    const typeErr = validateField("enquiryType", formData.enquiryType);
    if (typeErr) newErrors.enquiryType = typeErr;

    const msgErr = validateField("message", formData.message);
    if (msgErr) newErrors.message = msgErr;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      const firstErrorKey = Object.keys(newErrors)[0];
      const element = document.getElementById(`field-${firstErrorKey}`);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
        element.focus();
      }
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmittedId(data.enquiryId || `TW-${Date.now().toString().slice(-6)}`);
        setSubmissionSuccess(true);
      } else {
        setApiError(
          data.error || "Unable to send your enquiry right now. Please try again or reach out to our team directly."
        );
      }
    } catch (err) {
      console.error("Submission failed:", err);
      setApiError(
        "Network connection error. Please verify your connection or reach out to us at wholesale@toyworld-demo.com."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      businessName: "",
      email: "",
      phone: "",
      enquiryType: "",
      categories: [],
      estimatedQuantity: "",
      productOfInterest: "",
      message: "",
    });
    setErrors({});
    setSubmissionSuccess(false);
    setSubmittedId("");
    setApiError(null);
  };

  if (submissionSuccess) {
    return (
      <div className="p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl bg-white border border-emerald-200 shadow-xl text-left animate-in fade-in zoom-in-95 duration-300 w-full">
        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#B7F7D4]/40 border border-[#B7F7D4] text-[#059669] flex items-center justify-center mb-5 sm:mb-6">
          <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8" />
        </div>

        <div className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200 mb-3">
          Reference: {submittedId}
        </div>

        <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#20202A] tracking-tight mb-3">
          Thank You! Your Wholesale Enquiry Has Been Sent.
        </h3>

        <p className="text-xs sm:text-sm md:text-base text-[#747481] leading-relaxed mb-6">
          Our wholesale procurement team will review your requirements for{" "}
          <strong className="text-[#20202A]">{formData.fullName}</strong>
          {formData.businessName ? ` (${formData.businessName})` : ""} and respond with product availability, carton specifications, and customized wholesale pricing within 24 business hours.
        </p>

        <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-zinc-50 border border-zinc-200/80 mb-6 sm:mb-8 space-y-2 text-xs sm:text-sm">
          <div className="flex flex-col sm:flex-row sm:justify-between py-1 border-b border-zinc-200/60 gap-0.5 sm:gap-2">
            <span className="text-[#747481]">Enquiry Type:</span>
            <span className="font-semibold text-[#20202A]">{formData.enquiryType}</span>
          </div>
          {formData.productOfInterest && (
            <div className="flex flex-col sm:flex-row sm:justify-between py-1 border-b border-zinc-200/60 gap-0.5 sm:gap-2">
              <span className="text-[#747481]">Product of Interest:</span>
              <span className="font-semibold text-[#635BFF]">{formData.productOfInterest}</span>
            </div>
          )}
          {formData.estimatedQuantity && (
            <div className="flex flex-col sm:flex-row sm:justify-between py-1 border-b border-zinc-200/60 gap-0.5 sm:gap-2">
              <span className="text-[#747481]">Estimated Quantity:</span>
              <span className="font-semibold text-[#20202A]">{formData.estimatedQuantity}</span>
            </div>
          )}
          <div className="flex flex-col sm:flex-row sm:justify-between py-1 gap-0.5 sm:gap-2">
            <span className="text-[#747481]">Contact Email:</span>
            <span className="font-semibold text-[#20202A] break-all">{formData.email}</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold text-white bg-[#635BFF] hover:bg-[#5148E5] shadow-md transition-colors min-h-12"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Homepage</span>
          </Link>
          <button
            type="button"
            onClick={handleReset}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-[#20202A] bg-zinc-100 hover:bg-zinc-200 border border-zinc-200 transition-colors min-h-12"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Submit Another Enquiry</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-7 md:p-10 rounded-2xl sm:rounded-3xl bg-white border border-zinc-200/90 shadow-xl relative w-full">
      {formData.productOfInterest && (
        <div className="mb-5 sm:mb-6 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-[#635BFF]/10 border border-[#635BFF]/25 flex items-center justify-between gap-3 animate-in fade-in duration-200">
          <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
            <Package className="w-4 h-4 sm:w-5 sm:h-5 text-[#635BFF] shrink-0" />
            <div className="text-xs sm:text-sm min-w-0">
              <span className="text-[#747481]">Inquiring about: </span>
              <span className="font-bold text-[#635BFF] truncate">{formData.productOfInterest}</span>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setFormData((prev) => ({ ...prev, productOfInterest: "" }))}
            className="text-xs text-[#747481] hover:text-[#20202A] underline font-medium shrink-0 p-1"
          >
            Clear
          </button>
        </div>
      )}

      {apiError && (
        <div className="mb-5 sm:mb-6 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 flex items-start gap-3">
          <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-rose-600 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm">
            <p className="font-bold">Submission Notice</p>
            <p>{apiError}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-4 sm:space-y-6">
        {/* Row 1: Full Name & Business Name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          <div>
            <label
              htmlFor="field-fullName"
              className="block text-xs sm:text-sm font-bold text-[#20202A] mb-1.5"
            >
              Full Name <span className="text-[#FF6B6B]">*</span>
            </label>
            <input
              type="text"
              id="field-fullName"
              name="fullName"
              autoComplete="name"
              autoCapitalize="words"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="e.g. Sarah Jenkins"
              className={`w-full px-3.5 sm:px-4 py-3 rounded-xl sm:rounded-2xl text-base sm:text-sm bg-zinc-50 border ${
                errors.fullName ? "border-[#FF6B6B] bg-rose-50/30" : "border-zinc-200"
              } focus:bg-white focus:border-[#635BFF] focus:ring-2 focus:ring-[#635BFF]/20 transition-all duration-200 min-h-11.5 sm:min-h-12`}
              aria-required="true"
              aria-invalid={!!errors.fullName}
              aria-describedby={errors.fullName ? "error-fullName" : undefined}
            />
            {errors.fullName && (
              <p id="error-fullName" className="text-xs text-[#FF6B6B] font-medium mt-1.5 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errors.fullName}</span>
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="field-businessName"
              className="block text-xs sm:text-sm font-bold text-[#20202A] mb-1.5"
            >
              Business / Shop Name <span className="text-[#747481] text-xs font-normal">(Optional)</span>
            </label>
            <input
              type="text"
              id="field-businessName"
              name="businessName"
              autoComplete="organization"
              value={formData.businessName}
              onChange={handleInputChange}
              placeholder="e.g. WonderLand Toys & Gifts"
              className="w-full px-3.5 sm:px-4 py-3 rounded-xl sm:rounded-2xl text-base sm:text-sm bg-zinc-50 border border-zinc-200 focus:bg-white focus:border-[#635BFF] focus:ring-2 focus:ring-[#635BFF]/20 transition-all duration-200 min-h-11.5 sm:min-h-12"
            />
          </div>
        </div>

        {/* Row 2: Email & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          <div>
            <label
              htmlFor="field-email"
              className="block text-xs sm:text-sm font-bold text-[#20202A] mb-1.5"
            >
              Email Address <span className="text-[#FF6B6B]">*</span>
            </label>
            <input
              type="email"
              id="field-email"
              name="email"
              autoComplete="email"
              inputMode="email"
              autoCapitalize="none"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="name@store.com"
              className={`w-full px-3.5 sm:px-4 py-3 rounded-xl sm:rounded-2xl text-base sm:text-sm bg-zinc-50 border ${
                errors.email ? "border-[#FF6B6B] bg-rose-50/30" : "border-zinc-200"
              } focus:bg-white focus:border-[#635BFF] focus:ring-2 focus:ring-[#635BFF]/20 transition-all duration-200 min-h-11.5 sm:min-h-12`}
              aria-required="true"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "error-email" : undefined}
            />
            {errors.email && (
              <p id="error-email" className="text-xs text-[#FF6B6B] font-medium mt-1.5 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errors.email}</span>
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="field-phone"
              className="block text-xs sm:text-sm font-bold text-[#20202A] mb-1.5"
            >
              Phone Number <span className="text-[#FF6B6B]">*</span>
            </label>
            <input
              type="tel"
              id="field-phone"
              name="phone"
              autoComplete="tel"
              inputMode="tel"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="+1 (555) 000-0000"
              className={`w-full px-3.5 sm:px-4 py-3 rounded-xl sm:rounded-2xl text-base sm:text-sm bg-zinc-50 border ${
                errors.phone ? "border-[#FF6B6B] bg-rose-50/30" : "border-zinc-200"
              } focus:bg-white focus:border-[#635BFF] focus:ring-2 focus:ring-[#635BFF]/20 transition-all duration-200 min-h-11.5 sm:min-h-12`}
              aria-required="true"
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? "error-phone" : undefined}
            />
            {errors.phone && (
              <p id="error-phone" className="text-xs text-[#FF6B6B] font-medium mt-1.5 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errors.phone}</span>
              </p>
            )}
          </div>
        </div>

        {/* Row 3: Enquiry Type & Estimated Quantity */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          <div>
            <label
              htmlFor="field-enquiryType"
              className="block text-xs sm:text-sm font-bold text-[#20202A] mb-1.5"
            >
              Enquiry Type <span className="text-[#FF6B6B]">*</span>
            </label>
            <select
              id="field-enquiryType"
              name="enquiryType"
              value={formData.enquiryType}
              onChange={handleInputChange}
              className={`w-full px-3.5 sm:px-4 py-3 rounded-xl sm:rounded-2xl text-base sm:text-sm bg-zinc-50 border ${
                errors.enquiryType ? "border-[#FF6B6B] bg-rose-50/30" : "border-zinc-200"
              } focus:bg-white focus:border-[#635BFF] focus:ring-2 focus:ring-[#635BFF]/20 transition-all duration-200 min-h-11.5 sm:min-h-12`}
              aria-required="true"
              aria-invalid={!!errors.enquiryType}
              aria-describedby={errors.enquiryType ? "error-enquiryType" : undefined}
            >
              <option value="">Select Enquiry Type...</option>
              <option value="General Enquiry">General Enquiry</option>
              <option value="Wholesale Pricing">Wholesale Pricing</option>
              <option value="Bulk Order">Bulk Order</option>
              <option value="Product Availability">Product Availability</option>
              <option value="Retailer / Distributor Enquiry">Retailer / Distributor Enquiry</option>
              <option value="Other">Other</option>
            </select>
            {errors.enquiryType && (
              <p id="error-enquiryType" className="text-xs text-[#FF6B6B] font-medium mt-1.5 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errors.enquiryType}</span>
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="field-estimatedQuantity"
              className="block text-xs sm:text-sm font-bold text-[#20202A] mb-1.5"
            >
              Estimated Quantity <span className="text-[#747481] text-xs font-normal">(Optional)</span>
            </label>
            <select
              id="field-estimatedQuantity"
              name="estimatedQuantity"
              value={formData.estimatedQuantity}
              onChange={handleInputChange}
              className="w-full px-3.5 sm:px-4 py-3 rounded-xl sm:rounded-2xl text-base sm:text-sm bg-zinc-50 border border-zinc-200 focus:bg-white focus:border-[#635BFF] focus:ring-2 focus:ring-[#635BFF]/20 transition-all duration-200 min-h-11.5 sm:min-h-12"
            >
              <option value="">Select Estimated Quantity...</option>
              <option value="Under 50 pieces">Under 50 pieces</option>
              <option value="50–100 pieces">50–100 pieces</option>
              <option value="100–500 pieces">100–500 pieces</option>
              <option value="500+ pieces">500+ pieces</option>
              <option value="Not decided yet">Not decided yet</option>
            </select>
          </div>
        </div>

        {/* Interested Toy Categories (Multi-select) */}
        <div>
          <label className="block text-xs sm:text-sm font-bold text-[#20202A] mb-2">
            Interested Toy Categories <span className="text-[#747481] text-xs font-normal">(Select all that apply)</span>
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-2.5">
            {toyCategories.map((cat) => {
              const isChecked = formData.categories.includes(cat.title);
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => handleCategoryToggle(cat.title)}
                  className={`flex items-center gap-2.5 p-3 rounded-xl sm:rounded-2xl text-left border transition-all duration-200 text-xs sm:text-sm min-h-11 ${
                    isChecked
                      ? "bg-[#635BFF]/10 border-[#635BFF] text-[#635BFF] font-bold"
                      : "bg-zinc-50/70 border-zinc-200/80 text-[#20202A] hover:bg-zinc-100"
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded-md border flex items-center justify-center shrink-0 ${
                      isChecked
                        ? "bg-[#635BFF] border-[#635BFF] text-white"
                        : "border-zinc-300 bg-white"
                    }`}
                  >
                    {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                  </div>
                  <span className="truncate">{cat.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Product of Interest */}
        <div>
          <label
            htmlFor="field-productOfInterest"
            className="block text-xs sm:text-sm font-bold text-[#20202A] mb-1.5"
          >
            Product of Interest <span className="text-[#747481] text-xs font-normal">(Optional)</span>
          </label>
          <input
            type="text"
            id="field-productOfInterest"
            name="productOfInterest"
            value={formData.productOfInterest}
            onChange={handleInputChange}
            placeholder="e.g. Mini Toy Cars, Large Ride-On Toys, or specific SKU"
            className="w-full px-3.5 sm:px-4 py-3 rounded-xl sm:rounded-2xl text-base sm:text-sm bg-zinc-50 border border-zinc-200 focus:bg-white focus:border-[#635BFF] focus:ring-2 focus:ring-[#635BFF]/20 transition-all duration-200 min-h-11.5 sm:min-h-12"
          />
        </div>

        {/* Message / Requirements */}
        <div>
          <label
            htmlFor="field-message"
            className="block text-xs sm:text-sm font-bold text-[#20202A] mb-1.5"
          >
            Message / Requirements <span className="text-[#FF6B6B]">*</span>
          </label>
          <textarea
            id="field-message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Tell us what you need — product types, delivery destination, target order volume, or questions about wholesale pricing..."
            className={`w-full px-3.5 sm:px-4 py-3 rounded-xl sm:rounded-2xl text-base sm:text-sm bg-zinc-50 border ${
              errors.message ? "border-[#FF6B6B] bg-rose-50/30" : "border-zinc-200"
            } focus:bg-white focus:border-[#635BFF] focus:ring-2 focus:ring-[#635BFF]/20 transition-all duration-200 resize-y min-h-25`}
            aria-required="true"
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "error-message" : undefined}
          />
          {errors.message && (
            <p id="error-message" className="text-xs text-[#FF6B6B] font-medium mt-1.5 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{errors.message}</span>
            </p>
          )}
        </div>

        {/* Privacy Note */}
        <div className="flex items-start gap-2 pt-1 text-xs text-[#747481]">
          <ShieldCheck className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
          <span className="leading-snug">
            Privacy Note: Your information is kept strictly confidential and used solely to prepare your wholesale quotation and respond to your enquiry.
          </span>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3.5 sm:py-4 px-6 rounded-xl sm:rounded-2xl text-base font-bold text-white bg-linear-to-r from-[#635BFF] to-[#5148E5] hover:from-[#5148E5] hover:to-[#4338CA] shadow-lg shadow-[#635BFF]/25 hover:shadow-xl hover:shadow-[#635BFF]/35 active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-2 min-h-12.5"
            id="submit-enquiry-btn"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Sending Wholesale Enquiry...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Send Enquiry</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
