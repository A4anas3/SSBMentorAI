import { useParams, useNavigate } from "react-router-dom";
import { useOirTestDetail } from "@/hooks/oir/useOir";
import { patchOir } from "@/features/oir/oirapi";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import Header from "@/components/Header";

const OirEditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading } = useOirTestDetail(id);

  const [testName, setTestName] = useState("");
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    if (data) {
      setTestName(data.testName);
      setQuestions(data.questions);
    }
  }, [data]);

  const mutation = useMutation({
    mutationFn: patchOir,
    onSuccess: () => {
      alert("Test updated successfully");
      navigate("/oir/practice");
    },
  });

  if (isLoading) return <p className="mt-20 text-center">Loading...</p>;

  const handleQuestionChange = (index, field, value) => {
    const updated = [...questions];
    updated[index][field] = value;
    setQuestions(updated);
  };

  const handleSubmit = () => {
    mutation.mutate({
      id,
      payload: {
        testName,
        questions,
      },
    });
  };

  return (
    <>
      <Header />

      <div className="max-w-5xl mx-auto mt-10 bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-bold mb-6">Edit OIR Test</h2>

        {/* TEST NAME */}
        <label className="block mb-4">
          <span className="text-sm font-medium">Test Name</span>
          <input
            value={testName}
            onChange={(e) => setTestName(e.target.value)}
            className="mt-1 w-full border rounded-md p-2"
          />
        </label>

        {/* QUESTIONS */}
        {questions.map((q, index) => (
          <div key={q.questionId} className="border rounded-lg p-4 mb-6">
            <h4 className="font-semibold mb-2">Question {index + 1}</h4>

            <textarea
              value={q.questionText}
              onChange={(e) =>
                handleQuestionChange(index, "questionText", e.target.value)
              }
              className="w-full border p-2 rounded mb-2"
            />

            {["A", "B", "C", "D"].map((opt) => (
              <input
                key={opt}
                value={q[`option${opt}`]}
                onChange={(e) =>
                  handleQuestionChange(index, `option${opt}`, e.target.value)
                }
                placeholder={`Option ${opt}`}
                className="w-full border p-2 rounded mb-2"
              />
            ))}

            <select
              value={q.correctOption}
              onChange={(e) =>
                handleQuestionChange(index, "correctOption", e.target.value)
              }
              className="border p-2 rounded"
            >
              <option value="">Correct Option</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
            </select>
          </div>
        ))}

        <button
          onClick={handleSubmit}
          className="bg-primary text-white px-6 py-2 rounded-md"
        >
          Save Changes
        </button>
      </div>
    </>
  );
};

export default OirEditPage;
