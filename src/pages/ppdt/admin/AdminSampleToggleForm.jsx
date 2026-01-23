import { useState } from "react";

const AdminSampleToggleForm = ({ onSubmit, onClose }) => {
  const [action, setAction] = useState("");
  const [story, setStory] = useState("");

  return (
    <div className="bg-white border rounded-xl p-4 shadow mt-2">
      {/* ACTION */}
      <input
        type="text"
        className="w-full border rounded p-2 mb-3"
        placeholder="Enter action (e.g. Shows leadership)"
        value={action}
        onChange={(e) => setAction(e.target.value)}
        required
      />

      {/* SAMPLE STORY */}
      <textarea
        className="w-full border rounded p-2 mb-3"
        rows={3}
        placeholder="Write sample story..."
        value={story}
        onChange={(e) => setStory(e.target.value)}
        required
      />

      <div className="flex justify-end gap-2">
        <button
          type="button"
          onClick={onClose}
          className="px-3 py-1 border rounded"
        >
          Cancel
        </button>

        <button
          type="button"
          onClick={() => onSubmit({ action, sampleStory: story })}
          className="px-3 py-1 bg-blue-600 text-white rounded"
          disabled={!action.trim() || !story.trim()}
        >
          Add Sample
        </button>
      </div>
    </div>
  );
};

export default AdminSampleToggleForm;
