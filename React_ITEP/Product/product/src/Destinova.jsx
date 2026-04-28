import { useState } from "react";

const DESTINATIONS = [
  { id: 1, city: "Paris", country: "France", tagline: "The City of Light", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80", accent: "#e8a87c" },
  { id: 2, city: "Bali", country: "Indonesia", tagline: "Island of the Gods", image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80", accent: "#5ba4a4" },
  { id: 3, city: "Tokyo", country: "Japan", tagline: "Future Meets Tradition", image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80", accent: "#e87c8a" },
  { id: 4, city: "New York", country: "USA", tagline: "The City That Never Sleeps", image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80", accent: "#7c9ee8" },
  { id: 5, city: "Santorini", country: "Greece", tagline: "Aegean Dream", image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80", accent: "#4a9aba" },
  { id: 6, city: "Kyoto", country: "Japan", tagline: "Ancient Serenity", image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&q=80", accent: "#c97b8a" },
];

const PACKAGES = [
  { id: 1, dest_id: 1, name: "Paris Romantic Getaway", base_price: 500, hotel_ppn: 120, transport: 200, days: 5, rating: 4.8, reviews: 124, badge: "Bestseller" },
  { id: 2, dest_id: 1, name: "Paris Budget Explorer", base_price: 200, hotel_ppn: 60, transport: 150, days: 4, rating: 4.3, reviews: 88, badge: null },
  { id: 3, dest_id: 2, name: "Bali Bliss Package", base_price: 350, hotel_ppn: 80, transport: 100, days: 7, rating: 4.9, reviews: 213, badge: "Top Rated" },
  { id: 4, dest_id: 2, name: "Bali Adventure Tour", base_price: 400, hotel_ppn: 90, transport: 120, days: 6, rating: 4.6, reviews: 97, badge: null },
  { id: 5, dest_id: 3, name: "Tokyo City Explorer", base_price: 600, hotel_ppn: 150, transport: 250, days: 6, rating: 4.7, reviews: 156, badge: "New" },
  { id: 6, dest_id: 4, name: "New York Classic", base_price: 700, hotel_ppn: 200, transport: 300, days: 5, rating: 4.5, reviews: 189, badge: null },
];

const BOOKINGS_INIT = [
  { id: 1, package: "Bali Bliss Package", city: "Bali", date: "2025-02-14", persons: 2, total: 1890, status: "confirmed" },
  { id: 2, package: "Paris Romantic Getaway", city: "Paris", date: "2025-05-20", persons: 2, total: 3040, status: "pending" },
  { id: 3, package: "Tokyo City Explorer", city: "Tokyo", date: "2024-11-10", persons: 1, total: 1850, status: "confirmed" },
];

const REVIEWS = [
  { id: 1, pkg_id: 3, user: "Priya S.", rating: 5, comment: "Absolutely magical — the rice paddy views were breathtaking!", date: "Feb 2025" },
  { id: 2, pkg_id: 3, user: "Marco R.", rating: 5, comment: "Best trip of my life. Highly recommend the temple sunrise tour.", date: "Jan 2025" },
  { id: 3, pkg_id: 1, user: "Aisha K.", rating: 4, comment: "Beautiful city, great itinerary. Would have loved more free time.", date: "Mar 2025" },
];

const ADMIN_USERS = [
  { id: 1, name: "Alice Johnson", email: "alice@mail.com", role: "user", joined: "Jan 2025" },
  { id: 2, name: "Bob Martinez", email: "bob@mail.com", role: "user", joined: "Feb 2025" },
  { id: 3, name: "Admin User", email: "admin@destinova.com", role: "admin", joined: "Dec 2024" },
  { id: 4, name: "Priya Sharma", email: "priya@mail.com", role: "user", joined: "Mar 2025" },
];

const calcCost = (pkg, persons) => pkg.base_price * persons + pkg.hotel_ppn * pkg.days * persons + pkg.transport;

const Stars = ({ rating }) => (
  <span>
    <span style={{ color: "#f0a500", fontSize: 13 }}>{"★".repeat(Math.floor(rating))}</span>
    <span style={{ color: "#ddd", fontSize: 13 }}>{"★".repeat(5 - Math.floor(rating))}</span>
    <span style={{ color: "#9ab8bd", fontSize: 11, marginLeft: 5, fontFamily: "DM Sans, sans-serif" }}>{rating}</span>
  </span>
);

const StatusPill = ({ status }) => {
  const m = { confirmed: ["#e6f9f0","#1a9b5c","Confirmed"], pending: ["#fff8e6","#c47a00","Pending"], cancelled: ["#fde8e8","#c43030","Cancelled"] };
  const [bg, c, l] = m[status] || m.pending;
  return <span style={{ background: bg, color: c, fontSize: 11, fontWeight: 600, padding: "4px 12px", borderRadius: 20, fontFamily: "DM Sans, sans-serif" }}>{l}</span>;
};

const DestiNova =() =>{
  const [page, setPage] = useState("home");
  const [authMode, setAuthMode] = useState("login");
  const [user, setUser] = useState(null);
  const [selectedPkg, setSelectedPkg] = useState(null);
  const [bookingPkg, setBookingPkg] = useState(null);
  const [persons, setPersons] = useState(1);
  const [filterDest, setFilterDest] = useState(null);
  const [adminTab, setAdminTab] = useState("dashboard");
  const [toast, setToast] = useState(null);
  const [bookings, setBookings] = useState(BOOKINGS_INIT);
  const [reviewText, setReviewText] = useState("");
  const [reviewRating, setReviewRating] = useState(5);
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [regForm, setRegForm] = useState({ name: "", email: "", password: "" });

  const showToast = (msg, type = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  const handleLogin = () => {
    if (!loginForm.email) return;
    if (loginForm.email === "admin@destinova.com") {
      setUser({ name: "Admin", email: loginForm.email, role: "admin" });
      setPage("admin"); showToast("Welcome back, Admin! 👋");
    } else {
      setUser({ name: loginForm.email.split("@")[0], email: loginForm.email, role: "user" });
      setPage("home"); showToast("Welcome back! Ready to explore? ✈️");
    }
  };

  const handleRegister = () => {
    if (!regForm.name || !regForm.email) return;
    setUser({ name: regForm.name, email: regForm.email, role: "user" });
    setPage("home"); showToast("Account created! Welcome to DestiNova 🌍");
  };

  const handleBook = () => {
    const cost = calcCost(bookingPkg, persons);
    const dest = DESTINATIONS.find(d => d.id === bookingPkg.dest_id);
    setBookings(prev => [{ id: prev.length + 1, package: bookingPkg.name, city: dest.city, date: new Date().toISOString().slice(0, 10), persons, total: cost, status: "pending" }, ...prev]);
    setBookingPkg(null); setPersons(1);
    showToast(`Booking confirmed! Total: $${cost.toLocaleString()} 🎉`);
    setPage("bookings");
  };

  const pkgDetail = selectedPkg ? PACKAGES.find(p => p.id === selectedPkg) : null;
  const destDetail = pkgDetail ? DESTINATIONS.find(d => d.id === pkgDetail.dest_id) : null;
  const filteredPkgs = filterDest ? PACKAGES.filter(p => p.dest_id === filterDest) : PACKAGES;

  const G = {
    sand: "#faf7f2", sky: "#e8f4f8", white: "#ffffff",
    teal: "#3a9ba6", teal2: "#2d8490", coral: "#e8734a",
    ink: "#2c4a52", ink2: "#1e3a42", muted: "#8fa8ad",
    border: "#d8eaed", cream: "#f5f0e8",
  };

  return (
    <div style={{ fontFamily: "DM Sans, sans-serif", background: G.sand, minHeight: "100vh", color: G.ink }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=DM+Sans:wght@300;400;500;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #faf7f2; }
        ::-webkit-scrollbar { width: 5px; } ::-webkit-scrollbar-track { background: #e8f4f8; } ::-webkit-scrollbar-thumb { background: #3a9ba6; border-radius: 3px; }
        .serif { font-family: 'Cormorant Garamond', Georgia, serif; }
        .nav-link { cursor:pointer; font-size:13px; font-weight:500; color:#7a5c44; transition:color 0.2s; padding-bottom:3px; border-bottom:2px solid transparent; }
        .nav-link:hover, .nav-link.active { color:#3a9ba6; border-bottom-color:#3a9ba6; }
        .btn-p { background:#3a9ba6; color:#fff; border:none; cursor:pointer; font-family:'DM Sans',sans-serif; font-weight:600; font-size:13px; padding:12px 26px; border-radius:9px; transition:all 0.2s; box-shadow:0 4px 14px rgba(58,155,166,0.28); }
        .btn-p:hover { background:#2d8490; transform:translateY(-1px); box-shadow:0 6px 20px rgba(58,155,166,0.38); }
        .btn-c { background:#e8734a; color:#fff; border:none; cursor:pointer; font-family:'DM Sans',sans-serif; font-weight:600; font-size:13px; padding:12px 26px; border-radius:9px; transition:all 0.2s; box-shadow:0 4px 14px rgba(232,115,74,0.28); }
        .btn-c:hover { background:#d4623a; transform:translateY(-1px); }
        .btn-o { background:transparent; color:#3a9ba6; border:2px solid #3a9ba6; cursor:pointer; font-family:'DM Sans',sans-serif; font-weight:600; font-size:13px; padding:10px 24px; border-radius:9px; transition:all 0.2s; }
        .btn-o:hover { background:#3a9ba6; color:#fff; }
        .btn-g { background:transparent; color:#8fa8ad; border:1.5px solid #d8eaed; cursor:pointer; font-family:'DM Sans',sans-serif; font-size:12px; font-weight:500; padding:8px 16px; border-radius:7px; transition:all 0.2s; }
        .btn-g:hover { border-color:#3a9ba6; color:#3a9ba6; background:#eef7f9; }
        .card { background:#fff; border-radius:16px; overflow:hidden; border:1px solid #d8eaed; transition:transform 0.3s, box-shadow 0.3s; }
        .card:hover { transform:translateY(-5px); box-shadow:0 16px 48px rgba(44,74,82,0.11); }
        .input-f { background:#e8f4f8; border:1.5px solid #d8eaed; color:#2c4a52; font-family:'DM Sans',sans-serif; font-size:14px; padding:13px 16px; width:100%; outline:none; border-radius:10px; transition:border-color 0.2s, background 0.2s; }
        .input-f:focus { border-color:#3a9ba6; background:#fff; }
        .input-f::placeholder { color:#8fa8ad; }
        .tab-b { background:none; border:none; cursor:pointer; font-family:'DM Sans',sans-serif; font-size:13px; font-weight:500; padding:10px 18px; color:#8fa8ad; border-bottom:2px solid transparent; transition:all 0.2s; }
        .tab-b.active { color:#3a9ba6; border-bottom-color:#3a9ba6; font-weight:600; }
        .tab-b:hover { color:#2c4a52; }
        .stag { display:inline-block; background:#dff3f6; color:#2d8490; font-size:10px; font-weight:700; letter-spacing:2px; text-transform:uppercase; padding:5px 13px; border-radius:20px; margin-bottom:12px; }
        .zoom { transition:transform 0.5s ease; }
        .zoom:hover { transform:scale(1.06); }
        @keyframes fadeUp { from{opacity:0;transform:translateY(22px)} to{opacity:1;transform:translateY(0)} }
        @keyframes fadeIn { from{opacity:0} to{opacity:1} }
        @keyframes floatA { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-9px)} }
        .fu { animation:fadeUp 0.6s ease forwards; }
        .fi { animation:fadeIn 0.4s ease; }
      `}</style>

      {/* Toast */}
      {toast && (
        <div style={{ position:"fixed", top:20, right:20, zIndex:9999, background:"#fff", color:G.ink2, padding:"14px 22px", borderRadius:12, fontSize:13, fontWeight:500, border:`1.5px solid ${toast.type==="info"?"#a8d8df":"#b8e0c8"}`, boxShadow:"0 8px 32px rgba(44,74,82,0.12)", animation:"fadeIn 0.3s ease", maxWidth:360 }}>{toast.msg}</div>
      )}

      {/* Navbar */}
      <nav style={{ position:"fixed", top:0, left:0, right:0, zIndex:1000, background:"rgba(250,247,242,0.93)", backdropFilter:"blur(14px)", borderBottom:"1px solid #e2eff2", padding:"0 48px", height:64, display:"flex", alignItems:"center", justifyContent:"space-between" }}>
        <div onClick={() => setPage("home")} style={{ cursor:"pointer", display:"flex", alignItems:"center", gap:10 }}>
          <div style={{ width:34, height:34, borderRadius:10, background:"linear-gradient(135deg,#3a9ba6,#5bc4d0)", display:"flex", alignItems:"center", justifyContent:"center", boxShadow:"0 4px 12px rgba(58,155,166,0.3)", fontSize:16 }}>✈</div>
          <span style={{ fontFamily:"Cormorant Garamond, Georgia, serif", fontSize:22, fontWeight:700, color:G.ink2, letterSpacing:"0.3px" }}>DestiNova</span>
        </div>
        <div style={{ display:"flex", gap:28, alignItems:"center" }}>
          {[["home","Home"],["packages","Packages"],["destinations","Destinations"]].map(([p,l]) => (
            <span key={p} className={`nav-link ${page===p?"active":""}`} onClick={() => setPage(p)}>{l}</span>
          ))}
          {user && <span className={`nav-link ${page==="bookings"?"active":""}`} onClick={() => setPage("bookings")}>My Trips</span>}
          {user?.role==="admin" && <span className={`nav-link ${page==="admin"?"active":""}`} onClick={() => setPage("admin")}>Admin</span>}
        </div>
        <div style={{ display:"flex", gap:10, alignItems:"center" }}>
          {user ? (
            <>
              <div style={{ display:"flex", alignItems:"center", gap:8, background:"#eef7f9", borderRadius:8, padding:"6px 14px" }}>
                <div style={{ width:26, height:26, borderRadius:"50%", background:"linear-gradient(135deg,#3a9ba6,#e8734a)", display:"flex", alignItems:"center", justifyContent:"center" }}>
                  <span style={{ color:"#fff", fontSize:11, fontWeight:700 }}>{user.name[0].toUpperCase()}</span>
                </div>
                <span style={{ fontSize:13, color:G.ink2, fontWeight:500 }}>{user.name}</span>
              </div>
              <button className="btn-g" onClick={() => { setUser(null); setPage("home"); }}>Sign Out</button>
            </>
          ) : (
            <>
              <button className="btn-g" onClick={() => { setAuthMode("login"); setPage("auth"); }}>Sign In</button>
              <button className="btn-p" onClick={() => { setAuthMode("register"); setPage("auth"); }}>Join Free</button>
            </>
          )}
        </div>
      </nav>

      <div style={{ paddingTop:64 }}>

        {/* ─── HOME ─────────────────────────────────────── */}
        {page==="home" && (
          <div className="fi">
            {/* Hero */}
            <div style={{ position:"relative", minHeight:"90vh", overflow:"hidden", display:"flex", alignItems:"center", background:"linear-gradient(155deg,#c5eaf5 0%,#ddf3f0 35%,#eef8ee 60%,#faf5e4 100%)" }}>
              <div style={{ position:"absolute", top:-100, right:-100, width:500, height:500, borderRadius:"50%", background:"rgba(58,155,166,0.07)" }} />
              <div style={{ position:"absolute", bottom:20, left:-80, width:320, height:320, borderRadius:"50%", background:"rgba(232,115,74,0.06)" }} />
              <div style={{ position:"absolute", top:"20%", right:"10%", width:200, height:200, borderRadius:"50%", background:"rgba(90,180,190,0.05)" }} />

              {/* Left */}
              <div style={{ position:"relative", zIndex:2, padding:"80px 80px", flex:1, maxWidth:700 }}>
                <div className="stag fu" style={{ animationDelay:"0.05s", opacity:0 }}>✦ Travel Planner & Booking</div>
                <h1 style={{ fontFamily:"Cormorant Garamond, Georgia, serif", fontSize:"clamp(50px,6.5vw,86px)", lineHeight:1.05, fontWeight:700, color:G.ink2, animationDelay:"0.2s" }} className="fu">
                  Explore the<br />
                  <span style={{ color:"#3a9ba6", fontStyle:"italic" }}>World's</span><br />
                  Most Beautiful<br />Places
                </h1>
                <p className="fu" style={{ fontSize:16, color:"#5a7a82", lineHeight:1.8, maxWidth:420, marginTop:22, animationDelay:"0.35s", opacity:0 }}>
                  Handcrafted journeys to breathtaking destinations. Plan, book, and travel — effortlessly and affordably.
                </p>
                <div className="fu" style={{ display:"flex", gap:14, marginTop:38, animationDelay:"0.5s", opacity:0 }}>
                  <button className="btn-c" style={{ padding:"14px 36px", fontSize:14 }} onClick={() => setPage("packages")}>Browse Packages ✈</button>
                  <button className="btn-o" onClick={() => setPage("destinations")}>View Destinations</button>
                </div>
                <div className="fu" style={{ display:"flex", gap:32, marginTop:50, animationDelay:"0.65s", opacity:0 }}>
                  {[["✈","24 Packages"],["🌍","6 Destinations"],["⭐","4.8 Rating"],["👥","500+ Travelers"]].map(([ic,l]) => (
                    <div key={l} style={{ display:"flex", alignItems:"center", gap:7 }}>
                      <span style={{ fontSize:16 }}>{ic}</span>
                      <span style={{ fontSize:13, color:"#5a7a82", fontWeight:500 }}>{l}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right collage */}
              <div style={{ flex:1, height:"80vh", display:"flex", alignItems:"center", justifyContent:"center", position:"relative" }}>
                <div style={{ position:"relative", width:380, height:480 }}>
                  <div style={{ position:"absolute", top:0, left:20, width:270, height:350, borderRadius:24, overflow:"hidden", boxShadow:"0 24px 64px rgba(44,74,82,0.16)", animation:"floatA 5s ease-in-out infinite" }}>
                    <img src={DESTINATIONS[2].image} alt="Tokyo" style={{ width:"100%", height:"100%", objectFit:"cover" }} />
                    <div style={{ position:"absolute", bottom:0, left:0, right:0, padding:"18px 18px", background:"linear-gradient(to top,rgba(30,58,66,0.85),transparent)" }}>
                      <div style={{ fontSize:10, color:"#7dd8e0", letterSpacing:"2.5px", textTransform:"uppercase" }}>Japan</div>
                      <div style={{ fontFamily:"Cormorant Garamond, serif", fontSize:22, color:"#fff", fontWeight:600 }}>Tokyo</div>
                    </div>
                  </div>
                  <div style={{ position:"absolute", top:20, right:0, width:148, height:148, borderRadius:18, overflow:"hidden", boxShadow:"0 12px 36px rgba(44,74,82,0.14)", animation:"floatA 5s ease-in-out infinite 1.5s" }}>
                    <img src={DESTINATIONS[4].image} alt="Santorini" style={{ width:"100%", height:"100%", objectFit:"cover" }} />
                  </div>
                  <div style={{ position:"absolute", bottom:0, right:8, width:158, height:158, borderRadius:18, overflow:"hidden", boxShadow:"0 12px 36px rgba(44,74,82,0.14)", animation:"floatA 5s ease-in-out infinite 2.5s" }}>
                    <img src={DESTINATIONS[1].image} alt="Bali" style={{ width:"100%", height:"100%", objectFit:"cover" }} />
                  </div>
                  {/* Price badge */}
                  <div style={{ position:"absolute", top:195, left:-22, background:"#fff", borderRadius:14, padding:"14px 18px", boxShadow:"0 8px 28px rgba(44,74,82,0.12)", animation:"floatA 5s ease-in-out infinite 3s" }}>
                    <div style={{ fontSize:10, color:"#8fa8ad", fontWeight:500 }}>Starting from</div>
                    <div style={{ fontFamily:"Cormorant Garamond, serif", fontSize:26, color:"#3a9ba6", fontWeight:700 }}>$890</div>
                    <div style={{ fontSize:10, color:"#3a9ba6", marginTop:2 }}>✔ Best Price Guarantee</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Destinations strip */}
            <div style={{ background:"#fff", padding:"68px 80px" }}>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", marginBottom:38 }}>
                <div>
                  <div className="stag">Where to go</div>
                  <h2 style={{ fontFamily:"Cormorant Garamond, serif", fontSize:44, fontWeight:700, color:G.ink2, lineHeight:1.15 }}>Popular<br />Destinations</h2>
                </div>
                <button className="btn-o" onClick={() => setPage("destinations")}>See All →</button>
              </div>
              <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:18 }}>
                {DESTINATIONS.slice(0,3).map(d => (
                  <div key={d.id} className="card" style={{ cursor:"pointer" }} onClick={() => { setFilterDest(d.id); setPage("packages"); }}>
                    <div style={{ position:"relative", height:220, overflow:"hidden" }}>
                      <img src={d.image} alt={d.city} className="zoom" style={{ width:"100%", height:"100%", objectFit:"cover" }} />
                      <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top,rgba(30,58,66,0.65),transparent 55%)" }} />
                      <div style={{ position:"absolute", bottom:18, left:20 }}>
                        <div style={{ fontSize:9, color:d.accent, letterSpacing:"3px", textTransform:"uppercase", marginBottom:2, fontWeight:700 }}>{d.country}</div>
                        <div style={{ fontFamily:"Cormorant Garamond, serif", fontSize:26, fontWeight:700, color:"#fff" }}>{d.city}</div>
                      </div>
                    </div>
                    <div style={{ padding:"14px 18px", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                      <span style={{ fontSize:13, color:"#5a7a82" }}>{d.tagline}</span>
                      <span style={{ fontSize:12, color:"#3a9ba6", fontWeight:600 }}>{PACKAGES.filter(p=>p.dest_id===d.id).length} pkgs →</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Packages */}
            <div style={{ background:G.sky, padding:"68px 80px" }}>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", marginBottom:38 }}>
                <div>
                  <div className="stag">Handpicked for you</div>
                  <h2 style={{ fontFamily:"Cormorant Garamond, serif", fontSize:44, fontWeight:700, color:G.ink2 }}>Top Travel Packages</h2>
                </div>
                <button className="btn-o" onClick={() => setPage("packages")}>All Packages →</button>
              </div>
              <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:20 }}>
                {PACKAGES.slice(0,3).map(pkg => {
                  const dest = DESTINATIONS.find(d=>d.id===pkg.dest_id);
                  return (
                    <div key={pkg.id} className="card" style={{ cursor:"pointer" }} onClick={() => { setSelectedPkg(pkg.id); setPage("package-detail"); }}>
                      <div style={{ position:"relative", height:200, overflow:"hidden" }}>
                        <img src={dest.image} alt={dest.city} className="zoom" style={{ width:"100%", height:"100%", objectFit:"cover" }} />
                        {pkg.badge && <div style={{ position:"absolute", top:14, left:14, background:dest.accent, color:"#fff", fontSize:10, fontWeight:700, padding:"4px 10px", borderRadius:6, letterSpacing:"1px" }}>{pkg.badge}</div>}
                        <div style={{ position:"absolute", bottom:14, right:14, background:"rgba(255,255,255,0.92)", borderRadius:8, padding:"5px 11px" }}>
                          <span style={{ fontSize:11, color:"#2d8490", fontWeight:600 }}>🗓 {pkg.days} days</span>
                        </div>
                      </div>
                      <div style={{ padding:"16px 18px 20px" }}>
                        <div style={{ fontSize:10, color:dest.accent, fontWeight:700, letterSpacing:"1.5px", textTransform:"uppercase" }}>{dest.city}</div>
                        <div style={{ fontFamily:"Cormorant Garamond, serif", fontSize:19, color:G.ink2, marginTop:4, fontWeight:600 }}>{pkg.name}</div>
                        <div style={{ marginTop:8 }}><Stars rating={pkg.rating} /></div>
                        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginTop:14, paddingTop:12, borderTop:"1px solid #edf3f5" }}>
                          <div>
                            <div style={{ fontSize:10, color:"#8fa8ad" }}>From</div>
                            <div style={{ fontFamily:"Cormorant Garamond, serif", fontSize:26, color:"#3a9ba6", fontWeight:700 }}>${calcCost(pkg,1).toLocaleString()}</div>
                          </div>
                          <button className="btn-p" style={{ padding:"9px 18px", fontSize:12 }} onClick={e=>{e.stopPropagation();setSelectedPkg(pkg.id);setPage("package-detail");}}>View →</button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* CTA */}
            {!user && (
              <div style={{ background:"linear-gradient(135deg,#3a9ba6,#2d8490,#1e6e7a)", padding:"68px 80px", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                <div>
                  <div style={{ fontSize:10, letterSpacing:"3px", textTransform:"uppercase", color:"rgba(255,255,255,0.55)", marginBottom:10 }}>✦ Join us today</div>
                  <h2 style={{ fontFamily:"Cormorant Garamond, serif", fontSize:46, color:"#fff", fontWeight:700, lineHeight:1.2 }}>Your Next Adventure<br /><em>Starts Here</em></h2>
                  <p style={{ color:"rgba(255,255,255,0.72)", marginTop:16, maxWidth:380, lineHeight:1.75, fontSize:15 }}>Join thousands of travelers managing their journeys through DestiNova.</p>
                </div>
                <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
                  <button style={{ background:"#fff", color:"#2d8490", border:"none", cursor:"pointer", fontWeight:700, fontSize:14, padding:"16px 48px", borderRadius:10, boxShadow:"0 8px 24px rgba(0,0,0,0.14)", transition:"transform 0.2s" }}
                    onClick={() => { setAuthMode("register"); setPage("auth"); }} onMouseEnter={e=>e.currentTarget.style.transform="translateY(-2px)"} onMouseLeave={e=>e.currentTarget.style.transform="none"}>
                    Get Started — Free ✈
                  </button>
                  <button style={{ background:"transparent", color:"rgba(255,255,255,0.78)", border:"1.5px solid rgba(255,255,255,0.3)", cursor:"pointer", fontSize:13, fontWeight:500, padding:"12px 48px", borderRadius:10, transition:"all 0.2s" }}
                    onClick={() => { setAuthMode("login"); setPage("auth"); }}>Already have an account? Sign in</button>
                </div>
              </div>
            )}

            <footer style={{ background:G.ink2, padding:"28px 80px", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
              <div style={{ display:"flex", alignItems:"center", gap:10 }}>
                <div style={{ width:30, height:30, borderRadius:8, background:"#3a9ba6", display:"flex", alignItems:"center", justifyContent:"center", fontSize:14 }}>✈</div>
                <span style={{ fontFamily:"Cormorant Garamond, serif", fontSize:18, color:"#e8f4f8", fontWeight:600 }}>DestiNova</span>
              </div>
              <div style={{ fontSize:12, color:"#5a7a82" }}>Travel Planner & Booking System</div>
              <div style={{ fontSize:12, color:"#5a7a82" }}>© 2025 DestiNova</div>
            </footer>
          </div>
        )}

        {/* ─── DESTINATIONS ────────────────────────────── */}
        {page==="destinations" && (
          <div className="fi" style={{ background:G.sky, minHeight:"90vh", padding:"56px 80px" }}>
            <div className="stag">Explore everywhere</div>
            <h1 style={{ fontFamily:"Cormorant Garamond, serif", fontSize:58, fontWeight:700, color:G.ink2, marginBottom:44 }}>All Destinations</h1>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:18 }}>
              {DESTINATIONS.map(d => (
                <div key={d.id} className="card" style={{ cursor:"pointer" }} onClick={() => { setFilterDest(d.id); setPage("packages"); }}>
                  <div style={{ position:"relative", height:280, overflow:"hidden" }}>
                    <img src={d.image} alt={d.city} className="zoom" style={{ width:"100%", height:"100%", objectFit:"cover" }} />
                    <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top,rgba(30,58,66,0.7),transparent 52%)" }} />
                    <div style={{ position:"absolute", bottom:22, left:22 }}>
                      <div style={{ display:"inline-block", background:d.accent+"33", border:`1px solid ${d.accent}88`, borderRadius:6, padding:"3px 9px", fontSize:9, color:d.accent, letterSpacing:"2.5px", textTransform:"uppercase", fontWeight:700, marginBottom:6 }}>{d.country}</div>
                      <div style={{ fontFamily:"Cormorant Garamond, serif", fontSize:30, fontWeight:700, color:"#fff", lineHeight:1.1 }}>{d.city}</div>
                      <div style={{ fontSize:12, color:"rgba(255,255,255,0.75)", marginTop:5 }}>{d.tagline}</div>
                    </div>
                  </div>
                  <div style={{ padding:"14px 18px", display:"flex", justifyContent:"space-between" }}>
                    <span style={{ fontSize:12, color:"#8fa8ad" }}>{PACKAGES.filter(p=>p.dest_id===d.id).length} packages</span>
                    <span style={{ fontSize:13, color:"#3a9ba6", fontWeight:600 }}>Explore →</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ─── PACKAGES ────────────────────────────────── */}
        {page==="packages" && (
          <div className="fi" style={{ minHeight:"90vh", background:G.sand }}>
            <div style={{ background:"linear-gradient(135deg,#dff3f6,#eef8f4)", padding:"52px 80px 34px" }}>
              <div className="stag">All packages</div>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end" }}>
                <h1 style={{ fontFamily:"Cormorant Garamond, serif", fontSize:54, fontWeight:700, color:G.ink2 }}>Travel Packages</h1>
                <div style={{ display:"flex", gap:4, flexWrap:"wrap", justifyContent:"flex-end" }}>
                  <button className={`tab-b ${!filterDest?"active":""}`} onClick={() => setFilterDest(null)}>All</button>
                  {DESTINATIONS.map(d => <button key={d.id} className={`tab-b ${filterDest===d.id?"active":""}`} onClick={() => setFilterDest(d.id)}>{d.city}</button>)}
                </div>
              </div>
            </div>
            <div style={{ padding:"34px 80px 68px" }}>
              <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:20 }}>
                {filteredPkgs.map(pkg => {
                  const dest = DESTINATIONS.find(d=>d.id===pkg.dest_id);
                  return (
                    <div key={pkg.id} className="card">
                      <div style={{ position:"relative", height:210, overflow:"hidden" }}>
                        <img src={dest.image} alt={dest.city} className="zoom" style={{ width:"100%", height:"100%", objectFit:"cover" }} />
                        {pkg.badge && <div style={{ position:"absolute", top:14, left:14, background:dest.accent, color:"#fff", fontSize:10, fontWeight:700, padding:"4px 10px", borderRadius:6 }}>{pkg.badge}</div>}
                        <div style={{ position:"absolute", top:14, right:14, background:"rgba(255,255,255,0.92)", borderRadius:8, padding:"5px 11px" }}>
                          <span style={{ fontSize:11, color:"#2d8490", fontWeight:600 }}>🗓 {pkg.days}d</span>
                        </div>
                      </div>
                      <div style={{ padding:"16px 18px 20px" }}>
                        <div style={{ fontSize:10, color:dest.accent, fontWeight:700, letterSpacing:"1.5px", textTransform:"uppercase" }}>{dest.city}, {dest.country}</div>
                        <div style={{ fontFamily:"Cormorant Garamond, serif", fontSize:19, color:G.ink2, marginTop:4, fontWeight:600 }}>{pkg.name}</div>
                        <div style={{ marginTop:7 }}><Stars rating={pkg.rating} /></div>
                        <div style={{ display:"flex", gap:14, marginTop:10 }}>
                          <span style={{ fontSize:11, color:"#8fa8ad" }}>🏨 ${pkg.hotel_ppn}/night</span>
                          <span style={{ fontSize:11, color:"#8fa8ad" }}>🚌 ${pkg.transport}</span>
                        </div>
                        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginTop:14, paddingTop:12, borderTop:"1px solid #edf3f5" }}>
                          <div>
                            <div style={{ fontSize:10, color:"#aac0c4" }}>From / person</div>
                            <div style={{ fontFamily:"Cormorant Garamond, serif", fontSize:24, color:"#3a9ba6", fontWeight:700 }}>${calcCost(pkg,1).toLocaleString()}</div>
                          </div>
                          <div style={{ display:"flex", gap:8 }}>
                            <button className="btn-g" style={{ fontSize:11 }} onClick={() => { setSelectedPkg(pkg.id); setPage("package-detail"); }}>Details</button>
                            {user ? <button className="btn-p" style={{ fontSize:12, padding:"9px 16px" }} onClick={() => { setBookingPkg(pkg); setPersons(1); }}>Book</button>
                                  : <button className="btn-c" style={{ fontSize:12, padding:"9px 16px" }} onClick={() => { setAuthMode("login"); setPage("auth"); }}>Sign In</button>}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* ─── PACKAGE DETAIL ──────────────────────────── */}
        {page==="package-detail" && pkgDetail && (
          <div className="fi">
            <div style={{ position:"relative", height:"50vh", overflow:"hidden" }}>
              <img src={destDetail.image} alt={destDetail.city} style={{ width:"100%", height:"100%", objectFit:"cover" }} />
              <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top,rgba(30,58,66,0.82),rgba(30,58,66,0.15) 60%,transparent)" }} />
              <button className="btn-g" style={{ position:"absolute", top:24, left:48, background:"rgba(255,255,255,0.9)" }} onClick={() => setPage("packages")}>← Back</button>
              <div style={{ position:"absolute", bottom:44, left:80 }}>
                {pkgDetail.badge && <div style={{ display:"inline-block", background:destDetail.accent, color:"#fff", fontSize:10, fontWeight:700, padding:"4px 12px", borderRadius:6, marginBottom:12 }}>{pkgDetail.badge}</div>}
                <div style={{ fontSize:11, color:destDetail.accent, letterSpacing:"3px", textTransform:"uppercase", fontWeight:700 }}>{destDetail.city}, {destDetail.country}</div>
                <h1 style={{ fontFamily:"Cormorant Garamond, serif", fontSize:52, fontWeight:700, color:"#fff", lineHeight:1.1, marginTop:6 }}>{pkgDetail.name}</h1>
                <div style={{ marginTop:10 }}><Stars rating={pkgDetail.rating} /></div>
              </div>
            </div>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 360px", background:G.cream, padding:"0 80px 80px" }}>
              <div style={{ paddingRight:56, paddingTop:48 }}>
                {/* Info tiles */}
                <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:14, marginBottom:44 }}>
                  {[["🗓","Duration",`${pkgDetail.days} Days`],["💰","Base","$"+pkgDetail.base_price],["🏨","Hotel/Night","$"+pkgDetail.hotel_ppn],["🚌","Transport","$"+pkgDetail.transport]].map(([ic,l,v]) => (
                    <div key={l} style={{ background:"#fff", borderRadius:14, padding:"18px 14px", textAlign:"center", border:"1px solid #e2eff2" }}>
                      <div style={{ fontSize:20 }}>{ic}</div>
                      <div style={{ fontSize:10, color:"#8fa8ad", letterSpacing:"1.5px", textTransform:"uppercase", marginTop:7, fontWeight:600 }}>{l}</div>
                      <div style={{ fontFamily:"Cormorant Garamond, serif", fontSize:20, color:"#3a9ba6", fontWeight:700, marginTop:2 }}>{v}</div>
                    </div>
                  ))}
                </div>
                <div className="stag">About this trip</div>
                <p style={{ fontSize:15, color:"#5a7a82", lineHeight:1.85, marginTop:12, maxWidth:520 }}>
                  Experience the very best of {destDetail.city} with this carefully curated {pkgDetail.days}-day itinerary. Every detail is arranged — accommodation, transport, and guided experiences — so all you need to do is arrive and soak in the beauty.
                </p>
                <div style={{ marginTop:28, display:"flex", flexWrap:"wrap", gap:10 }}>
                  {["Guided tours","Airport transfers","Premium hotels","Local cuisine","Free cancellation","24/7 support"].map(h => (
                    <div key={h} style={{ background:"#dff3f6", borderRadius:20, padding:"7px 16px" }}>
                      <span style={{ fontSize:12, color:"#2d8490", fontWeight:500 }}>✓ {h}</span>
                    </div>
                  ))}
                </div>

                <h3 style={{ fontFamily:"Cormorant Garamond, serif", fontSize:30, color:G.ink2, marginTop:50, marginBottom:22 }}>Guest Reviews</h3>
                <div style={{ display:"flex", flexDirection:"column", gap:16 }}>
                  {REVIEWS.filter(r=>r.pkg_id===pkgDetail.id).length===0
                    ? <p style={{ color:"#8fa8ad", fontSize:14 }}>No reviews yet — be the first!</p>
                    : REVIEWS.filter(r=>r.pkg_id===pkgDetail.id).map(r => (
                      <div key={r.id} style={{ background:"#fff", borderRadius:14, padding:20, border:"1px solid #e2eff2" }}>
                        <div style={{ display:"flex", justifyContent:"space-between", marginBottom:10 }}>
                          <div style={{ display:"flex", alignItems:"center", gap:10 }}>
                            <div style={{ width:32, height:32, borderRadius:"50%", background:"linear-gradient(135deg,#3a9ba6,#e8734a)", display:"flex", alignItems:"center", justifyContent:"center" }}>
                              <span style={{ color:"#fff", fontSize:12, fontWeight:700 }}>{r.user[0]}</span>
                            </div>
                            <div>
                              <div style={{ fontSize:13, fontWeight:600, color:G.ink2 }}>{r.user}</div>
                              <div style={{ fontSize:11, color:"#aac0c4" }}>{r.date}</div>
                            </div>
                          </div>
                          <Stars rating={r.rating} />
                        </div>
                        <p style={{ fontSize:13, color:"#5a7a82", lineHeight:1.7 }}>{r.comment}</p>
                      </div>
                    ))
                  }
                </div>

                {user && (
                  <div style={{ background:"#fff", borderRadius:16, padding:26, marginTop:22, border:"1px solid #e2eff2" }}>
                    <div className="stag">Write a Review</div>
                    <div style={{ display:"flex", gap:8, margin:"14px 0 14px" }}>
                      {[1,2,3,4,5].map(n => (
                        <span key={n} onClick={() => setReviewRating(n)} style={{ fontSize:26, cursor:"pointer", color:n<=reviewRating?"#f0a500":"#d8e8ec" }}>★</span>
                      ))}
                    </div>
                    <textarea className="input-f" rows={3} placeholder="Share your experience..." value={reviewText} onChange={e=>setReviewText(e.target.value)} style={{ resize:"none" }} />
                    <button className="btn-p" style={{ marginTop:14 }} onClick={() => { showToast("Review submitted! Thank you ✨"); setReviewText(""); }}>Submit Review</button>
                  </div>
                )}
              </div>

              {/* Booking sidebar */}
              <div style={{ paddingTop:48 }}>
                <div style={{ background:"#fff", borderRadius:20, padding:28, border:"1.5px solid #c8e8ee", boxShadow:"0 12px 40px rgba(58,155,166,0.1)", position:"sticky", top:84 }}>
                  <div className="stag">Book this trip</div>
                  <div style={{ fontFamily:"Cormorant Garamond, serif", fontSize:40, color:"#3a9ba6", fontWeight:700, marginTop:8 }}>${calcCost(pkgDetail,persons).toLocaleString()}</div>
                  <div style={{ fontSize:12, color:"#8fa8ad", marginBottom:22 }}>{persons} person{persons>1?"s":""} · {pkgDetail.days} days</div>
                  <div style={{ marginBottom:20 }}>
                    <div style={{ fontSize:11, color:"#8fa8ad", fontWeight:600, letterSpacing:"1.5px", textTransform:"uppercase", marginBottom:10 }}>Persons</div>
                    <div style={{ display:"flex", alignItems:"center", gap:14, background:"#f0f8fa", borderRadius:12, padding:"10px 14px", width:"fit-content" }}>
                      <button onClick={() => setPersons(Math.max(1,persons-1))} style={{ width:30, height:30, borderRadius:"50%", border:"none", background:persons===1?"#e2eff2":"#3a9ba6", color:persons===1?"#aac0c4":"#fff", cursor:persons===1?"not-allowed":"pointer", fontSize:18, display:"flex", alignItems:"center", justifyContent:"center" }}>−</button>
                      <span style={{ fontFamily:"Cormorant Garamond, serif", fontSize:28, color:G.ink2, minWidth:28, textAlign:"center" }}>{persons}</span>
                      <button onClick={() => setPersons(persons+1)} style={{ width:30, height:30, borderRadius:"50%", border:"none", background:"#3a9ba6", color:"#fff", cursor:"pointer", fontSize:18, display:"flex", alignItems:"center", justifyContent:"center" }}>+</button>
                    </div>
                  </div>
                  <div style={{ background:"#f5fafc", borderRadius:12, padding:"14px 16px", marginBottom:20 }}>
                    {[["Base",`$${pkgDetail.base_price}×${persons}`,pkgDetail.base_price*persons],["Hotel",`$${pkgDetail.hotel_ppn}×${pkgDetail.days}d×${persons}`,pkgDetail.hotel_ppn*pkgDetail.days*persons],["Transport","Fixed",pkgDetail.transport]].map(([l,v,a]) => (
                      <div key={l} style={{ display:"flex", justifyContent:"space-between", marginBottom:8 }}>
                        <div><div style={{ fontSize:12, color:"#5a7a82" }}>{l}</div><div style={{ fontSize:10, color:"#aac0c4" }}>{v}</div></div>
                        <span style={{ fontSize:13, color:G.ink, fontWeight:500 }}>${a.toLocaleString()}</span>
                      </div>
                    ))}
                    <div style={{ borderTop:"2px dashed #c8e8ee", paddingTop:12, marginTop:4, display:"flex", justifyContent:"space-between" }}>
                      <span style={{ fontSize:14, fontWeight:700, color:G.ink2 }}>Total</span>
                      <span style={{ fontFamily:"Cormorant Garamond, serif", fontSize:22, color:"#3a9ba6", fontWeight:700 }}>${calcCost(pkgDetail,persons).toLocaleString()}</span>
                    </div>
                  </div>
                  {user ? <button className="btn-c" style={{ width:"100%", padding:"14px", fontSize:14 }} onClick={() => setBookingPkg(pkgDetail)}>Book Now ✈</button>
                        : <button className="btn-p" style={{ width:"100%", padding:"14px", fontSize:14 }} onClick={() => { setAuthMode("login"); setPage("auth"); }}>Sign In to Book</button>}
                  <p style={{ fontSize:11, color:"#aac0c4", textAlign:"center", marginTop:12, lineHeight:1.6 }}>🔒 Free cancellation · Secure payment</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ─── BOOKINGS ─────────────────────────────────── */}
        {page==="bookings" && user && (
          <div className="fi" style={{ background:G.sky, minHeight:"90vh", padding:"56px 80px" }}>
            <div className="stag">Your journeys</div>
            <h1 style={{ fontFamily:"Cormorant Garamond, serif", fontSize:56, fontWeight:700, color:G.ink2, marginBottom:38 }}>My Trips</h1>
            {bookings.length===0 ? (
              <div style={{ textAlign:"center", padding:"80px 0" }}>
                <div style={{ fontSize:64, marginBottom:20 }}>✈️</div>
                <div style={{ fontFamily:"Cormorant Garamond, serif", fontSize:32, color:"#aac0c4" }}>No trips yet</div>
                <button className="btn-p" style={{ marginTop:24 }} onClick={() => setPage("packages")}>Browse Packages</button>
              </div>
            ) : (
              <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
                {bookings.map(b => (
                  <div key={b.id} style={{
                    background:"#fff", borderRadius:16, padding:"22px 26px",
                    display:"flex", justifyContent:"space-between", alignItems:"center",
                    border:"1.5px solid #e2eff2",
                    borderLeft:`4px solid ${b.status==="confirmed"?"#1a9b5c":b.status==="cancelled"?"#c43030":"#c47a00"}`,
                    boxShadow:"0 3px 14px rgba(44,74,82,0.06)",
                  }}>
                    <div style={{ display:"flex", gap:18, alignItems:"center" }}>
                      <div style={{ width:46, height:46, borderRadius:12, background:"linear-gradient(135deg,#dff3f6,#c8e8ee)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:20 }}>✈</div>
                      <div>
                        <div style={{ fontFamily:"Cormorant Garamond, serif", fontSize:20, color:G.ink2, fontWeight:600 }}>{b.package}</div>
                        <div style={{ fontSize:12, color:"#8fa8ad", marginTop:3 }}>📍 {b.city} · 📅 {b.date} · 👥 {b.persons} person{b.persons>1?"s":""}</div>
                      </div>
                    </div>
                    <div style={{ display:"flex", gap:22, alignItems:"center" }}>
                      <div style={{ textAlign:"right" }}>
                        <div style={{ fontFamily:"Cormorant Garamond, serif", fontSize:26, color:"#3a9ba6", fontWeight:700 }}>${b.total.toLocaleString()}</div>
                        <div style={{ marginTop:5 }}><StatusPill status={b.status} /></div>
                      </div>
                      {b.status!=="cancelled" && <button className="btn-g" style={{ color:"#c43030", borderColor:"#f5c6c6", fontSize:12 }} onClick={() => handleCancel(b.id)}>Cancel</button>}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ─── AUTH ─────────────────────────────────────── */}
        {page==="auth" && (
          <div className="fi" style={{ minHeight:"90vh", display:"grid", gridTemplateColumns:"1fr 1fr" }}>
            <div style={{ position:"relative", overflow:"hidden" }}>
              <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&q=80" alt="" style={{ width:"100%", height:"100%", objectFit:"cover" }} />
              <div style={{ position:"absolute", inset:0, background:"linear-gradient(135deg,rgba(58,155,166,0.65),rgba(30,58,66,0.7))" }} />
              <div style={{ position:"absolute", inset:0, display:"flex", flexDirection:"column", justifyContent:"flex-end", padding:"56px 52px" }}>
                <div style={{ background:"rgba(255,255,255,0.12)", backdropFilter:"blur(10px)", borderRadius:20, padding:"26px 26px 22px", border:"1px solid rgba(255,255,255,0.2)" }}>
                  <div style={{ fontSize:10, letterSpacing:"3px", textTransform:"uppercase", color:"rgba(255,255,255,0.55)", marginBottom:10 }}>✦ DestiNova</div>
                  <div style={{ fontFamily:"Cormorant Garamond, serif", fontSize:38, color:"#fff", fontWeight:700, lineHeight:1.2 }}>Your next<br />adventure<br /><em style={{ color:"#7dd8e0" }}>awaits.</em></div>
                  <div style={{ fontSize:13, color:"rgba(255,255,255,0.68)", marginTop:14, lineHeight:1.75 }}>Join thousands of happy travelers planning unforgettable journeys.</div>
                </div>
              </div>
            </div>
            <div style={{ display:"flex", alignItems:"center", justifyContent:"center", background:"#fff", padding:"60px 68px" }}>
              <div style={{ width:"100%", maxWidth:400 }}>
                <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:34 }}>
                  <div style={{ width:34, height:34, borderRadius:10, background:"linear-gradient(135deg,#3a9ba6,#5bc4d0)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:16 }}>✈</div>
                  <span style={{ fontFamily:"Cormorant Garamond, serif", fontSize:22, fontWeight:700, color:G.ink2 }}>DestiNova</span>
                </div>
                <div style={{ display:"flex", borderBottom:"2px solid #edf3f5", marginBottom:32 }}>
                  {["login","register"].map(m => (
                    <button key={m} className={`tab-b ${authMode===m?"active":""}`} onClick={() => setAuthMode(m)} style={{ fontSize:14 }}>
                      {m==="login"?"Sign In":"Create Account"}
                    </button>
                  ))}
                </div>
                {authMode==="login" ? (
                  <div style={{ display:"flex", flexDirection:"column", gap:16 }}>
                    {[["Email Address","email","email","you@example.com"],["Password","password","password","••••••••"]].map(([l,k,t,p]) => (
                      <div key={k}>
                        <label style={{ fontSize:12, color:"#5a7a82", fontWeight:600, display:"block", marginBottom:7 }}>{l}</label>
                        <input className="input-f" type={t} placeholder={p} value={loginForm[k]} onChange={e=>setLoginForm({...loginForm,[k]:e.target.value})} />
                      </div>
                    ))}
                    <div style={{ fontSize:12, color:"#3a9ba6", cursor:"pointer", textAlign:"right", fontWeight:500 }}>Forgot password?</div>
                    <button className="btn-p" style={{ width:"100%", padding:"14px", fontSize:14, marginTop:4 }} onClick={handleLogin}>Sign In</button>
                    <div style={{ textAlign:"center", padding:"10px 14px", background:"#f0f8fa", borderRadius:8 }}>
                      <span style={{ fontSize:11, color:"#8fa8ad" }}>Admin demo: </span>
                      <span style={{ fontSize:11, color:"#3a9ba6", fontWeight:600 }}>admin@destinova.com</span>
                    </div>
                  </div>
                ) : (
                  <div style={{ display:"flex", flexDirection:"column", gap:16 }}>
                    {[["Full Name","name","text","Your Name"],["Email","email","email","you@example.com"],["Password","password","password","Min 6 characters"]].map(([l,k,t,p]) => (
                      <div key={k}>
                        <label style={{ fontSize:12, color:"#5a7a82", fontWeight:600, display:"block", marginBottom:7 }}>{l}</label>
                        <input className="input-f" type={t} placeholder={p} value={regForm[k]} onChange={e=>setRegForm({...regForm,[k]:e.target.value})} />
                      </div>
                    ))}
                    <button className="btn-p" style={{ width:"100%", padding:"14px", fontSize:14, marginTop:4 }} onClick={handleRegister}>Create Account ✈</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ─── ADMIN ────────────────────────────────────── */}
        {page==="admin" && user?.role==="admin" && (
          <div className="fi" style={{ background:"#f0f8fa", minHeight:"90vh", padding:"46px 58px" }}>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", marginBottom:32 }}>
              <div>
                <div className="stag">Control Panel</div>
                <h1 style={{ fontFamily:"Cormorant Garamond, serif", fontSize:48, fontWeight:700, color:G.ink2 }}>Admin Dashboard</h1>
              </div>
              <div style={{ fontSize:12, color:"#8fa8ad" }}>Welcome, {user.name} 👋</div>
            </div>
            {/* Stats */}
            <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:16, marginBottom:32 }}>
              {[["👤","Users",ADMIN_USERS.length,"#3a9ba6","#dff3f6"],["📦","Packages",PACKAGES.length,"#e8734a","#fdf0e8"],["📋","Bookings",bookings.length,"#1a9b5c","#e6f9f0"],["🌍","Destinations",DESTINATIONS.length,"#7c9ee8","#eef1fd"]].map(([ic,l,v,c,bg]) => (
                <div key={l} style={{ background:"#fff", borderRadius:16, padding:"22px 20px", border:"1.5px solid #e2eff2", boxShadow:"0 2px 12px rgba(44,74,82,0.04)" }}>
                  <div style={{ width:42, height:42, borderRadius:12, background:bg, display:"flex", alignItems:"center", justifyContent:"center", fontSize:20, marginBottom:12 }}>{ic}</div>
                  <div style={{ fontFamily:"Cormorant Garamond, serif", fontSize:38, color:c, fontWeight:700 }}>{v}</div>
                  <div style={{ fontSize:11, color:"#8fa8ad", fontWeight:600, marginTop:2 }}>{l}</div>
                </div>
              ))}
            </div>
            {/* Tabs */}
            <div style={{ borderBottom:"2px solid #e2eff2", marginBottom:26, background:"#fff", borderRadius:"12px 12px 0 0", padding:"0 12px" }}>
              {["dashboard","users","bookings","packages","destinations"].map(t => (
                <button key={t} className={`tab-b ${adminTab===t?"active":""}`} onClick={() => setAdminTab(t)} style={{ textTransform:"capitalize", fontSize:13 }}>{t}</button>
              ))}
            </div>

            {adminTab==="dashboard" && (
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:20 }}>
                {[["Recent Bookings", bookings.slice(0,4).map(b => (
                  <div key={b.id} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"12px 0", borderBottom:"1px solid #f0f5f7" }}>
                    <div><div style={{ fontFamily:"Cormorant Garamond, serif", fontSize:15, color:G.ink2 }}>{b.package}</div><div style={{ fontSize:11, color:"#8fa8ad" }}>{b.date} · {b.persons}p</div></div>
                    <div style={{ display:"flex", gap:12, alignItems:"center" }}><span style={{ fontFamily:"Cormorant Garamond, serif", color:"#3a9ba6", fontSize:17, fontWeight:600 }}>${b.total.toLocaleString()}</span><StatusPill status={b.status} /></div>
                  </div>
                ))], ["Top Packages", [...PACKAGES].sort((a,b)=>b.reviews-a.reviews).slice(0,4).map(p => {
                  const dest = DESTINATIONS.find(d=>d.id===p.dest_id);
                  return <div key={p.id} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"12px 0", borderBottom:"1px solid #f0f5f7" }}><div><div style={{ fontFamily:"Cormorant Garamond, serif", fontSize:15, color:G.ink2 }}>{p.name}</div><div style={{ fontSize:11, color:"#8fa8ad" }}>{dest.city} · {p.reviews} reviews</div></div><Stars rating={p.rating} /></div>;
                })]].map(([title, content]) => (
                  <div key={title} style={{ background:"#fff", borderRadius:16, padding:26, border:"1px solid #e2eff2" }}>
                    <h3 style={{ fontFamily:"Cormorant Garamond, serif", fontSize:24, color:G.ink2, marginBottom:18 }}>{title}</h3>
                    {content}
                  </div>
                ))}
              </div>
            )}

            {adminTab==="users" && (
              <div style={{ background:"#fff", borderRadius:16, overflow:"hidden", border:"1px solid #e2eff2" }}>
                <table style={{ width:"100%", borderCollapse:"collapse" }}>
                  <thead><tr style={{ background:"#f5fafc" }}>
                    {["#","Name","Email","Role","Joined","Action"].map(h => <th key={h} style={{ padding:"14px 18px", textAlign:"left", fontSize:10, color:"#8fa8ad", fontWeight:700, letterSpacing:"1.5px", textTransform:"uppercase" }}>{h}</th>)}
                  </tr></thead>
                  <tbody>
                    {ADMIN_USERS.map(u => (
                      <tr key={u.id} style={{ borderBottom:"1px solid #f0f5f7" }}>
                        <td style={{ padding:"14px 18px", fontSize:12, color:"#aac0c4" }}>{u.id}</td>
                        <td style={{ padding:"14px 18px" }}>
                          <div style={{ display:"flex", alignItems:"center", gap:10 }}>
                            <div style={{ width:30, height:30, borderRadius:"50%", background:"linear-gradient(135deg,#3a9ba6,#e8734a)", display:"flex", alignItems:"center", justifyContent:"center" }}><span style={{ color:"#fff", fontSize:12, fontWeight:700 }}>{u.name[0]}</span></div>
                            <span style={{ fontSize:14, color:G.ink2, fontWeight:500 }}>{u.name}</span>
                          </div>
                        </td>
                        <td style={{ padding:"14px 18px", fontSize:13, color:"#5a7a82" }}>{u.email}</td>
                        <td style={{ padding:"14px 18px" }}><span style={{ background:u.role==="admin"?"#dff3f6":"#f5f0e8", color:u.role==="admin"?"#2d8490":"#7a5c44", fontSize:11, fontWeight:600, padding:"4px 10px", borderRadius:6 }}>{u.role}</span></td>
                        <td style={{ padding:"14px 18px", fontSize:12, color:"#8fa8ad" }}>{u.joined}</td>
                        <td style={{ padding:"14px 18px" }}><button className="btn-g" style={{ fontSize:11 }}>Manage</button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {adminTab==="bookings" && (
              <div style={{ background:"#fff", borderRadius:16, overflow:"hidden", border:"1px solid #e2eff2" }}>
                <table style={{ width:"100%", borderCollapse:"collapse" }}>
                  <thead><tr style={{ background:"#f5fafc" }}>
                    {["ID","Package","City","Date","Persons","Total","Status"].map(h => <th key={h} style={{ padding:"14px 18px", textAlign:"left", fontSize:10, color:"#8fa8ad", fontWeight:700, letterSpacing:"1.5px", textTransform:"uppercase" }}>{h}</th>)}
                  </tr></thead>
                  <tbody>
                    {bookings.map(b => (
                      <tr key={b.id} style={{ borderBottom:"1px solid #f0f5f7" }}>
                        <td style={{ padding:"14px 18px", fontSize:12, color:"#3a9ba6", fontWeight:600 }}>#{String(b.id).padStart(4,"0")}</td>
                        <td style={{ padding:"14px 18px", fontFamily:"Cormorant Garamond, serif", fontSize:15, color:G.ink2 }}>{b.package}</td>
                        <td style={{ padding:"14px 18px", fontSize:13, color:"#5a7a82" }}>{b.city}</td>
                        <td style={{ padding:"14px 18px", fontSize:12, color:"#8fa8ad" }}>{b.date}</td>
                        <td style={{ padding:"14px 18px", fontSize:13, color:G.ink, textAlign:"center" }}>{b.persons}</td>
                        <td style={{ padding:"14px 18px", fontFamily:"Cormorant Garamond, serif", fontSize:17, color:"#3a9ba6", fontWeight:700 }}>${b.total.toLocaleString()}</td>
                        <td style={{ padding:"14px 18px" }}><StatusPill status={b.status} /></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {adminTab==="packages" && (
              <div>
                <div style={{ display:"flex", justifyContent:"flex-end", marginBottom:14 }}>
                  <button className="btn-p" onClick={() => showToast("Add package — coming soon! 🚀")}>+ Add Package</button>
                </div>
                <div style={{ background:"#fff", borderRadius:16, overflow:"hidden", border:"1px solid #e2eff2" }}>
                  <table style={{ width:"100%", borderCollapse:"collapse" }}>
                    <thead><tr style={{ background:"#f5fafc" }}>
                      {["#","Package","Dest","Duration","Base","Actions"].map(h => <th key={h} style={{ padding:"14px 18px", textAlign:"left", fontSize:10, color:"#8fa8ad", fontWeight:700, letterSpacing:"1.5px", textTransform:"uppercase" }}>{h}</th>)}
                    </tr></thead>
                    <tbody>
                      {PACKAGES.map(p => {
                        const dest=DESTINATIONS.find(d=>d.id===p.dest_id);
                        return (
                          <tr key={p.id} style={{ borderBottom:"1px solid #f0f5f7" }}>
                            <td style={{ padding:"14px 18px", fontSize:12, color:"#aac0c4" }}>{p.id}</td>
                            <td style={{ padding:"14px 18px", fontFamily:"Cormorant Garamond, serif", fontSize:15, color:G.ink2 }}>{p.name}</td>
                            <td style={{ padding:"14px 18px", fontSize:13, color:"#5a7a82" }}>{dest.city}</td>
                            <td style={{ padding:"14px 18px", fontSize:13, color:"#5a7a82" }}>{p.days}d</td>
                            <td style={{ padding:"14px 18px", fontFamily:"Cormorant Garamond, serif", fontSize:17, color:"#3a9ba6", fontWeight:700 }}>${p.base_price}</td>
                            <td style={{ padding:"14px 18px", display:"flex", gap:8 }}>
                              <button className="btn-g" style={{ fontSize:11 }} onClick={() => showToast("Edit mode!")}>Edit</button>
                              <button className="btn-g" style={{ fontSize:11, color:"#c43030", borderColor:"#f5c6c6" }} onClick={() => showToast("Removed!","info")}>Del</button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {adminTab==="destinations" && (
              <div>
                <div style={{ display:"flex", justifyContent:"flex-end", marginBottom:14 }}>
                  <button className="btn-p" onClick={() => showToast("Add destination — coming soon! 🌍")}>+ Add Destination</button>
                </div>
                <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:16 }}>
                  {DESTINATIONS.map(d => (
                    <div key={d.id} style={{ background:"#fff", borderRadius:16, overflow:"hidden", border:"1px solid #e2eff2" }}>
                      <div style={{ position:"relative", height:140 }}>
                        <img src={d.image} alt={d.city} style={{ width:"100%", height:"100%", objectFit:"cover" }} />
                        <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top,rgba(30,58,66,0.45),transparent)" }} />
                        <div style={{ position:"absolute", bottom:12, left:16, fontFamily:"Cormorant Garamond, serif", fontSize:20, color:"#fff", fontWeight:600 }}>{d.city}</div>
                      </div>
                      <div style={{ padding:"12px 16px 16px" }}>
                        <div style={{ fontSize:12, color:"#8fa8ad", marginBottom:12 }}>{d.country} · {PACKAGES.filter(p=>p.dest_id===d.id).length} packages</div>
                        <div style={{ display:"flex", gap:8 }}>
                          <button className="btn-g" style={{ fontSize:11, flex:1 }} onClick={() => showToast("Edit mode!")}>Edit</button>
                          <button className="btn-g" style={{ fontSize:11, color:"#c43030", borderColor:"#f5c6c6", flex:1 }} onClick={() => showToast("Removed!","info")}>Remove</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Booking Modal */}
      {bookingPkg && (
        <div style={{ position:"fixed", inset:0, zIndex:2000, background:"rgba(30,58,66,0.45)", backdropFilter:"blur(6px)", display:"flex", alignItems:"center", justifyContent:"center", animation:"fadeIn 0.25s ease" }}
          onClick={() => setBookingPkg(null)}>
          <div style={{ background:"#fff", borderRadius:24, padding:"40px 40px 32px", maxWidth:490, width:"90%", boxShadow:"0 32px 80px rgba(30,58,66,0.18)", animation:"fadeUp 0.3s ease" }}
            onClick={e=>e.stopPropagation()}>
            <div className="stag">Confirm Your Booking</div>
            <h2 style={{ fontFamily:"Cormorant Garamond, serif", fontSize:30, color:G.ink2, margin:"10px 0 4px" }}>{bookingPkg.name}</h2>
            <p style={{ fontSize:13, color:"#8fa8ad", marginBottom:26 }}>{DESTINATIONS.find(d=>d.id===bookingPkg.dest_id)?.city} · {bookingPkg.days} days</p>
            <div style={{ marginBottom:22 }}>
              <div style={{ fontSize:12, color:"#5a7a82", fontWeight:600, marginBottom:12 }}>Number of Persons</div>
              <div style={{ display:"flex", alignItems:"center", gap:14, background:"#f0f8fa", borderRadius:14, padding:"12px 18px", width:"fit-content" }}>
                <button onClick={() => setPersons(Math.max(1,persons-1))} style={{ width:34, height:34, borderRadius:"50%", border:"none", background:persons===1?"#e2eff2":"#3a9ba6", color:persons===1?"#aac0c4":"#fff", cursor:persons===1?"not-allowed":"pointer", fontSize:20, display:"flex", alignItems:"center", justifyContent:"center" }}>−</button>
                <span style={{ fontFamily:"Cormorant Garamond, serif", fontSize:36, color:G.ink2, minWidth:40, textAlign:"center" }}>{persons}</span>
                <button onClick={() => setPersons(persons+1)} style={{ width:34, height:34, borderRadius:"50%", border:"none", background:"#3a9ba6", color:"#fff", cursor:"pointer", fontSize:20, display:"flex", alignItems:"center", justifyContent:"center" }}>+</button>
              </div>
            </div>
            <div style={{ background:"#f5fafc", borderRadius:14, padding:"16px 18px", marginBottom:24 }}>
              {[["Base Price",`$${bookingPkg.base_price}×${persons}`,bookingPkg.base_price*persons],["Hotel",`$${bookingPkg.hotel_ppn}/night×${bookingPkg.days}d×${persons}`,bookingPkg.hotel_ppn*bookingPkg.days*persons],["Transport","Fixed",bookingPkg.transport]].map(([l,v,a]) => (
                <div key={l} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:9 }}>
                  <div><span style={{ fontSize:13, color:"#5a7a82" }}>{l}</span><span style={{ fontSize:10, color:"#aac0c4", marginLeft:8 }}>{v}</span></div>
                  <span style={{ fontSize:14, color:G.ink, fontWeight:500 }}>${a.toLocaleString()}</span>
                </div>
              ))}
              <div style={{ borderTop:"2px dashed #c8e8ee", paddingTop:12, marginTop:4, display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                <span style={{ fontSize:15, fontWeight:700, color:G.ink2 }}>Total Amount</span>
                <span style={{ fontFamily:"Cormorant Garamond, serif", fontSize:32, color:"#3a9ba6", fontWeight:700 }}>${calcCost(bookingPkg,persons).toLocaleString()}</span>
              </div>
            </div>
            <div style={{ display:"flex", gap:12 }}>
              <button className="btn-g" style={{ flex:1, padding:"13px" }} onClick={() => setBookingPkg(null)}>Cancel</button>
              <button className="btn-c" style={{ flex:2, padding:"13px", fontSize:14 }} onClick={handleBook}>Confirm Booking ✈</button>
            </div>
            <p style={{ textAlign:"center", fontSize:11, color:"#aac0c4", marginTop:12 }}>🔒 Secure booking · Free cancellation</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default DestiNova