import React from "react";

const Collapsible = (props) => {
  return (
    <div>
      <div class="accordion accordion-flush" id="accordionFlushExample">
        <div class="accordion-item border-t-0 border-l-0 border-r-0 rounded-none bg-stone-700 border border-gray-200">
          <h2 class="accordion-header mb-0" id="flush-headingOne">
            <button
              class="accordion-button
    relative
    flex
    items-center
    w-full
    py-4
    px-5
    text-base text-gray-200 text-left
    bg-stone-700
    border-0
    rounded-none
    transition
    focus:outline-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            class="accordion-collapse border-0 collapse show"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body py-4 px-5">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collapsible;
