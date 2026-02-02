import Header from "@/components/Header.jsx";
import SectionTitle from "@/components/SectionTitle.jsx";
import TestCard from "@/components/TestCard.jsx";
import ConfirmAlert from "@/components/ConfirmAlert";

import { useTatTestCards } from "@/hooks/tat/useTat";
import { useTatAdmin } from "@/hooks/tat/useTatAdmin";

import tatImage from "@/assets/card-tat.jpg";
import { Brain } from "lucide-react";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { IS_ADMIN } from "@/config/admin";

const TatTestList = () => {
  const { data, isLoading, error } = useTatTestCards();
  const { deleteTat } = useTatAdmin();
  const navigate = useNavigate();

  /* ✅ Alert State */
  const [showAlert, setShowAlert] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const handleDeleteClick = (id) => {
    setSelectedId(id);
    setShowAlert(true);
  };

  const handleConfirmDelete = async () => {
    if (!selectedId) return;
    await deleteTat(selectedId);
    setShowAlert(false);
    setSelectedId(null);
  };

  const handleCancelDelete = () => {
    setShowAlert(false);
    setSelectedId(null);
  };

  if (isLoading) return <p className="text-center mt-20">Loading...</p>;

  if (error)
    return (
      <p className="text-center mt-20 text-red-500">Error loading TAT tests</p>
    );

  return (
    <section className="py-16 pt-24 bg-background">
      <Header />

      <div className="container mx-auto px-4">
        {/* ✅ Heading */}
        <div className="mb-10">
          <SectionTitle
            title="TAT Test (Real Attempt)"
            subtitle="This is the actual test environment. Pictures appear briefly, time is limited, and you write your own story — just like in SSB."
          />
        </div>

        {/* ✅ Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((test, index) => (
            <TestCard
              key={test.id}
              title={`TAT Test ${index + 1}`}
              description="⏱️ Timed | ✍️ Write independently | 🧠 Focus on action & outcome"
              image={tatImage}
              icon={Brain}
              href={`/tat/test/${test.id}`}
              size="small"
              /* ✅ Admin Controls (DELETE ONLY) */
              showDelete={IS_ADMIN}
              onDelete={() => handleDeleteClick(test.id)}
            />
          ))}
        </div>
      </div>

      {/* ✅ Confirm Delete */}
      <ConfirmAlert
        show={showAlert}
        title="Delete TAT Test"
        message="Are you sure you want to delete this TAT test? This action cannot be undone."
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
      />
    </section>
  );
};

export default TatTestList;
