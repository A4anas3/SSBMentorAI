import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { lazy, Suspense } from "react";
import LoadingSpinner from "@/components/LoadingSpinner";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const PPDTPractice = lazy(() => import("./pages/PPDTPractice"));
const PPDTSteps = lazy(() => import("@/pages/ppdt/PPDTSteps"));
const SamplePPDT = lazy(() => import("@/pages/ppdt/SamplePPDT"));
const PPDTTest = lazy(() => import("@/pages/ppdt/PPDTTest"));
const AddPPDTImage = lazy(() => import("@/pages/ppdt/admin/AddPPDTImage"));
const AdminPPDTImages = lazy(
  () => import("@/pages/ppdt/admin/AdminPPDTImages"),
);
const PPDTImageSelect = lazy(
  () => import("@/pages/ppdt/admin/test/PPDTImageSelect"),
);
const GDComingSoon = lazy(() => import("@/pages/ppdt/GDComingSoon"));
const SSBInterviewRoadmap = lazy(() => import("@/pages/SSBInterviewRoadmap"));
const LecturettePage = lazy(() => import("@/pages/LecturettePage"));
const LecturetteDetailPage = lazy(
  () => import("@/pages/Lecturette/LecturetteDetailPage"),
);
const GPEPage = lazy(() => import("@/pages/GPE/GPEPage"));
const AboutGPE = lazy(() => import("@/pages/GPE/AboutGPE"));
const SampleGPEPage = lazy(() => import("@/pages/GPE/SampleGPEPage"));
const GpeTestPage = lazy(() => import("@/pages/GPE/GpeTestPage"));
const SampleGPEDetail = lazy(() => import("@/pages/GPE/SampleGPEDetail"));
const AddGpeModel = lazy(() => import("@/pages/GPE/AddGpeModel"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/practice/ppdt" element={<PPDTPractice />} />
            <Route path="/practice/ppdt/steps" element={<PPDTSteps />} />
            <Route path="/practice/ppdt/sample" element={<SamplePPDT />} />
            <Route
              path="/practice/ppdt/PPDTImageSelect"
              element={<PPDTImageSelect />}
            />
            <Route path="/practice/ppdt/test/:imageId" element={<PPDTTest />} />
            <Route path="/practice/ppdt/gd-soon" element={<GDComingSoon />} />

            <Route path="/admin/ppdt/add-image" element={<AddPPDTImage />} />
            <Route path="/admin/ppdt/images" element={<AdminPPDTImages />} />
            <Route path="/front/roadmap" element={<SSBInterviewRoadmap />} />
            <Route path="/lecturettes" element={<LecturettePage />} />
            <Route path="/lecturette/:id" element={<LecturetteDetailPage />} />
            <Route path="/gpe" element={<GPEPage />} />
            <Route path="/gpe/about" element={<AboutGPE />} />
            <Route path="/gpe/sample" element={<SampleGPEPage />} />
            <Route path="/gpe/test" element={<GpeTestPage />} />
            <Route path="/gpe/sample/:id" element={<SampleGPEDetail />} />
            <Route path="/admin/gpe/add" element={<AddGpeModel />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);
export default App;
