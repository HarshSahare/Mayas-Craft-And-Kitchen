export default function TypographyTest() {
  return (
    <main className="min-h-screen bg-[#FFF8EE] px-4 py-10 text-[#2B211D]">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="mb-12">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-[#7A3E2B]">
            Maya's Kitchen & Craft
          </p>

          <h1 className="text-3xl font-semibold">Mobile Typography Test</h1>

          <p className="mt-3 text-base text-[#6F625B]">
            Compare the proposed mobile font sizes before we lock the design
            system.
          </p>
        </div>

        {/* Display */}
        <section className="mb-12 border-b border-[#E8DED5] pb-10">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-sm font-medium text-[#7A3E2B]">Display</span>

            <span className="text-xs text-[#95877F]">40px</span>
          </div>

          <h2 className="text-[40px] font-semibold leading-[1.1]">
            Handcrafted with love
          </h2>
        </section>

        {/* H1 */}
        <section className="mb-12 border-b border-[#E8DED5] pb-10">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-sm font-medium text-[#7A3E2B]">H1</span>

            <span className="text-xs text-[#95877F]">32px</span>
          </div>

          <h2 className="text-[32px] font-semibold leading-[1.2]">
            Discover Something Special
          </h2>
        </section>

        {/* H2 */}
        <section className="mb-12 border-b border-[#E8DED5] pb-10">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-sm font-medium text-[#7A3E2B]">H2</span>

            <span className="text-xs text-[#95877F]">28px</span>
          </div>

          <h2 className="text-[28px] font-semibold leading-[1.2]">
            Explore Our Collection
          </h2>
        </section>

        {/* H3 */}
        <section className="mb-12 border-b border-[#E8DED5] pb-10">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-sm font-medium text-[#7A3E2B]">H3</span>

            <span className="text-xs text-[#95877F]">24px</span>
          </div>

          <h2 className="text-[24px] font-semibold leading-[1.3]">
            Best Sellers
          </h2>
        </section>

        {/* H4 */}
        <section className="mb-12 border-b border-[#E8DED5] pb-10">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-sm font-medium text-[#7A3E2B]">H4</span>

            <span className="text-xs text-[#95877F]">20px</span>
          </div>

          <h2 className="text-[20px] font-semibold leading-[1.4]">
            Handmade Chocolate Collection
          </h2>
        </section>

        {/* Product title */}
        <section className="mb-12 border-b border-[#E8DED5] pb-10">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-sm font-medium text-[#7A3E2B]">
              Product Title
            </span>

            <span className="text-xs text-[#95877F]">18px</span>
          </div>

          <h2 className="text-[18px] font-semibold leading-[1.4]">
            White Chocolate Cranberry
          </h2>
        </section>

        {/* Body */}
        <section className="mb-12 border-b border-[#E8DED5] pb-10">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-sm font-medium text-[#7A3E2B]">Body</span>

            <span className="text-xs text-[#95877F]">16px</span>
          </div>

          <p className="text-[16px] font-normal leading-6">
            Carefully handcrafted using premium ingredients and thoughtful
            recipes, made especially for those little moments worth celebrating.
          </p>
        </section>

        {/* Secondary */}
        <section className="mb-12 border-b border-[#E8DED5] pb-10">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-sm font-medium text-[#7A3E2B]">
              Secondary
            </span>

            <span className="text-xs text-[#95877F]">14px</span>
          </div>

          <p className="text-[14px] font-normal leading-5 text-[#6F625B]">
            Made fresh with carefully selected ingredients.
          </p>
        </section>

        {/* Caption */}
        <section className="mb-12">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-sm font-medium text-[#7A3E2B]">Caption</span>

            <span className="text-xs text-[#95877F]">12px</span>
          </div>

          <p className="text-[12px] font-normal leading-4 text-[#95877F]">
            Available for a limited time
          </p>
        </section>

        {/* Summary */}
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-semibold">Proposed Mobile Scale</h2>

          <div className="space-y-2 text-sm">
            <p>Display — 40px</p>
            <p>H1 — 32px</p>
            <p>H2 — 28px</p>
            <p>H3 — 24px</p>
            <p>H4 — 20px</p>
            <p>Product Title — 18px</p>
            <p>Body — 16px</p>
            <p>Secondary — 14px</p>
            <p>Caption — 12px</p>
          </div>
        </div>
      </div>
    </main>
  );
}
