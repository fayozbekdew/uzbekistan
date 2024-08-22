import tree from "../data/trees.json";
const Modal = ({ showModal, setShowModal, selectedId }) => {
  const [selectedTree] = tree.filter((item) => {
    return item.id === selectedId.typeId;
  });
  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <>
      {showModal && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full h-[550px]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4 bg-green-300 px-4 py-4">
              <h2 className="text-[20px] font-semibold text-gray-900">
                Daraxt malumoti
              </h2>
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={closeModal}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="mb-4 flex flex-col ">
              <span className="">
                <img
                  src={selectedTree?.image}
                  alt="tree img"
                  className="border w-full h-48"
                />
              </span>
              <p className="text-green-400 text-xl">
                <span className="font-semibold text-black">ID:</span> {selectedId?.id}
              </p>
              <p className="text-green-400 text-xl">
                <span className="font-semibold text-black">Viloyat:</span>
                {selectedTree?.region}
              </p>
              <p className="text-green-400 text-xl">
                <span className="font-semibold text-black">Tuman:</span>{" "}
                {selectedTree?.district}
              </p>
              <p className="text-green-400 text-xl">
                <span className="font-semibold text-black">Daraxt turi:</span>{" "}
                {selectedTree?.treeType}
              </p>
              <p className="text-green-400 text-xl">
                <span className="font-semibold text-black">Masul tashkilot:</span>
                {selectedTree?.organization}
              </p>
              <p className="text-green-400 text-xl">
                <span className="font-semibold text-black">Manzil:</span>{" "}
                {selectedTree?.address}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
