export default function RegisterForm() {

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      alert(result.message);
      e.target.reset();
    } catch (err) {
      alert("Failed to send registration. Try again.");
    }
  };

  return (
  <section class="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-100 dark:border-slate-800" id="register">
  <div class="p-10 lg:p-16 flex flex-col justify-center">
    <h2 class="text-4xl font-black mb-6">Ready to turn your <span className="text-primary">writing skills</span> to make <span className="text-primary">Money?</span></h2>
    <p class="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
      The next live seminar is scheduled for <span class="font-bold text-slate-900 dark:text-white">Saturday, 12th August at 18:00 GMT</span>. Secure your spot now to receive the pre-seminar workbook and resource kit.
    </p>
    <div class="space-y-4">
      <div class="flex items-start gap-4">
        <div class="bg-primary/10 text-primary p-1 rounded">
          <span class="material-symbols-outlined">check_circle</span>
        </div>
        <div>
          <p class="font-bold">Live Q&amp;A Session</p>
          <p class="text-sm text-slate-500">Direct feedback on your writing ideas.</p>
        </div>
      </div>
      <div class="flex items-start gap-4">
        <div class="bg-primary/10 text-primary p-1 rounded">
          <span class="material-symbols-outlined">check_circle</span>
        </div>
        <div>
          <p class="font-bold">Exclusive Resource Kit</p>
          <p class="text-sm text-slate-500">Publishing templates and pitch decks.</p>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-slate-50 dark:bg-slate-800/50 p-10 lg:p-16">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          placeholder="Full Name"
          required
          className="w-full px-4 py-3 rounded-lg border"
        />

        <input
          name="email"
          type="email"
          placeholder="Email Address"
          required
          className="w-full px-4 py-3 rounded-lg border"
        />

        <input
          name="phone"
          placeholder="Phone (Whatsapp)"
          required
          className="w-full px-4 py-3 rounded-lg border"
        />

        <textarea
          name="message"
          placeholder="Your Book Writing Questions..."
          required
          className="w-full px-4 py-3 rounded-lg border"
        />

        <button
          type="submit"
          className="w-full bg-primary text-white py-4 rounded-lg font-black"
        >
          REGISTER FOR THE SEMINAR
        </button>
      </form>
      </div>
    </section>
  );
}
