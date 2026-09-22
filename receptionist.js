//Demo data for the receptionist dashboard. In a real app, this would be fetched from a database.

const records = [
  {
    type: "Student",
    name: "Adaeze Okonkwo",
    id: "24/1234",
    level: "200L",
    dept: "Computer Science",
    email: "mrcool@gmail.com",
    phoneNumber: "+2348012345678",
    dob: "2004-02-15",
    bgroup: "O+",
    allergies: "None known",
    emergencyContact: "+2348012345678",
    contactName: "Chinwe Okonkwo",
    relationship: "Mother",
    healthNotes: "i have a history of mild asthma. Ensure inhaler is available during visits.",
    lastVisit: "2026-08-04",
  },
  {
    type: "Student",
    name: "Olusanya Uthman",
    id: "24/0539",
    level: "300L",
    dept: "Computer Science",
    email: "mrcool@gmail.com",
    phoneNumber: "+2348012345678",
    dob: "2004-02-15",
    bgroup: "O+",
    allergies: "None known",
    emergencyContact: "+2348012345678",
    contactName: "Uthman Olusanya",
    relationship: "Father",
    healthNotes: null,
    lastVisit: "2026-08-09",
  },
  {
    type: "Staff",
    name: "Mr Balogun Adebayo",
    id: "STAFF-204",
    level: null,
    dept: "Security",
    email: "balo@gmail.com",
    phoneNumber: "+2348000000001",
    dob: "1980-02-15",
    bgroup: "A+",
    allergies: "None known",
    emergencyContact: "+2348012345679",
    contactName: "Sofia adebayo",
    relationship: "Wife",
    healthNotes: null,
    lastVisit: "2026-08-04",
  },
  {
  type: "Student",
  name: "Chidera Nwosu",
  id: "24/1842",
  level: "200L",
  dept: "Computer Science",
  email: "chidera.nwosu@example.com",
  phoneNumber: "+2348012345671",
  dob: "2005-06-18",
  bgroup: "O+",
  allergies: "None known",
  emergencyContact: "+2348034567891",
  contactName: "Ngozi Nwosu",
  relationship: "Mother",
  healthNotes: "Occasional seasonal allergies. No other concerns reported.",
  lastVisit: "2026-08-12",
  },
  {
  type: "Staff",
  name: "Mrs Grace Adeyemi",
  id: "STAFF-118",
  level: null,
  dept: "Registry",
  email: "grace.adeyemi@example.com",
  phoneNumber: "+2348023456782",
  dob: "1978-11-09",
  bgroup: "A+",
  allergies: "None known",
  emergencyContact: "+2348056789123",
  contactName: "Tunde Adeyemi",
  relationship: "Husband",
  healthNotes: null,
  lastVisit: "2026-07-28",
  },
  {
  type: "Student",
  name: "Ibrahim Musa",
  id: "23/0976",
  level: "300L",
  dept: "Economics",
  email: "ibrahim.musa@example.com",
  phoneNumber: "+2348098765432",
  dob: "2003-09-22",
  bgroup: "B+",
  allergies: "Peanuts",
  emergencyContact: "+2348076543210",
  contactName: "Amina Musa",
  relationship: "Sister",
  healthNotes: "Please note food allergy during any clinical visit.",
  lastVisit: "2026-08-20",
  },
  {
  type: "Staff",
  name: "Mr Chukwuemeka Okafor",
  id: "STAFF-347",
  level: null,
  dept: "Works Department",
  email: "chukwuemeka.okafor@example.com",
  phoneNumber: "+2348065432198",
  dob: "1985-04-03",
  bgroup: "O-",
  allergies: "None known",
  emergencyContact: "+2348087654321",
  contactName: "Amarachi Okafor",
  relationship: "Wife",
  healthNotes: "History of mild hypertension.",
  lastVisit: "2026-08-07",
  },
  {
  type: "Student",
  name: "Temiloluwa Johnson",
  id: "25/0621",
  level: "100L",
  dept: "Mass Communication",
  email: "temiloluwa.johnson@example.com",
  phoneNumber: "+2348101234567",
  dob: "2006-01-14",
  bgroup: "A-",
  allergies: "None known",
  emergencyContact: "+2348112345678",
  contactName: "Bola Johnson",
  relationship: "Father",
  healthNotes: null,
  lastVisit: "2026-08-25",
},

{
  type: "Staff",
  name: "Dr Fatima Bello",
  id: "STAFF-092",
  level: null,
  dept: "Academic Planning",
  email: "fatima.bello@example.com",
  phoneNumber: "+2348123456789",
  dob: "1976-07-30",
  bgroup: "AB+",
  allergies: "Penicillin",
  emergencyContact: "+2348134567890",
  contactName: "Yusuf Bello",
  relationship: "Brother",
  healthNotes: null,
  lastVisit: "2026-08-18",
},

{
  type: "Student",
  name: "Samuel Eze",
  id: "24/2157",
  level: "400L",
  dept: "Electrical Engineering",
  email: "samuel.eze@example.com",
  phoneNumber: "+2348145678901",
  dob: "2002-12-05",
  bgroup: "O+",
  allergies: "None known",
  emergencyContact: "+2348156789012",
  contactName: "Grace Eze",
  relationship: "Mother",
  healthNotes: "Occasional fatigue reported during periods of high academic workload.",
  lastVisit: "2026-08-30",
},


];

// Each appointment: patient's matric/staff ID (doubles as the record identifier), name, date, time, status

let appointments = [
  {
    recordId: "STAFF-092",
    name: "Dr Fatima Bello",
    date: offsetDate(0),
    time: "10:00",
    status: "Pending",
  },
  {
    recordId: "24/1234",
    name: "Adaeze Okonkwo",
    date: offsetDate(-1),
    time: "09:30",
    status: "Pending",
  },
  {
    recordId: "24/2157",
    name: "Samuel Eze",
    date: offsetDate(-4),
    time: "14:00",
    status: "Pending",
  },
  {
    recordId: "25/0621",
    name: "Temiloluwa Johnson",
    date: offsetDate(-9),
    time: "11:15",
    status: "Pending",
  },
  {
    recordId: "STAFF-204",
    name: "Mr Balogun Adebayo",
    date: offsetDate(-13),
    time: "13:00",
    status: "Pending",
  },
  {
    recordId: "23/0976",
    name: "Ibrahim Musa",
    date: offsetDate(-45),
    time: "09:00",
    status: "Pending",
  },
];

let pendingBookingRecordId = null; // holds which record we're booking for while the modal is open

// ---- Helper: format a Date object as YYYY-MM-DD ----
function fmtDate(d) {
  return d.toISOString().slice(0, 10);
}
// ---- Helper: shift today's date by N days (negative = past) ----
function offsetDate(days) {
  const d = new Date();
  d.setDate(d.getDate() + days);
  return fmtDate(d);
}

function initials(name) {
  return name
    .split(" ")
    .filter((w) => !/^(Mrs\.|Mr\.|Dr\.)$/.test(w))
    .map((p) => p[0])
    .slice(0, 2)
    .join("");
}

// ---- Recent searches: last 5 unique IDs looked up, most recent first ----
let recentSearches = [];
function trackSearch(id) {
  recentSearches = recentSearches.filter(
    (x) => x.toLowerCase() !== id.toLowerCase(),
  );
  recentSearches.unshift(id);
  recentSearches = recentSearches.slice(0, 5);
  renderRecentSearches();
}

function renderRecentSearches() {
  const box = document.getElementById("recent-searches");
  if (recentSearches.length === 0) {
    box.innerHTML = "";
    return;
  }
  box.innerHTML = `
    <div class="recent-row">
      <span class="recent-label">Recent:</span>
      ${recentSearches.map((id) => `<button class="recent-chip" onclick="quickSearch('${id}')">${id}</button>`).join("")}
    </div>`;
}
function quickSearch(id) {
  document.getElementById("search-input").value = id;
  search();
}

// ---- Search: find record by exact ID match ----
function search() {
  const q = document.getElementById("search-input").value.trim().toLowerCase();
  const box = document.getElementById("search-result");
  const r = records.find((x) => x.id.toLowerCase() === q);

  if (q) trackSearch(q.toUpperCase());

  if (!r) {
    box.innerHTML = `<div class="error-msg">No record found for "${q || "—"}". Ask them to register via the QR code first.</div>`;
    return;
  }

  box.innerHTML = `
    <div class="result">
      <div class="avatar">${initials(r.name)}</div>
      <div class="result-info">
        <div class="result-name">${r.name}</div>
        <div class="result-meta"><span class="id-chip">${r.id}</span> · ${r.type} · ${r.dept}</div>
        <div class="result-last">Last visit: ${r.lastVisit || "No previous visits"}</div>
      </div>
      <button class="btn-accent" onclick="openBookingModal('${r.id}')">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4.5" width="18" height="16" rx="2"/><path d="M3 9.5h18M8 3v3M16 3v3"/></svg>
        Book Appointment
      </button>
    </div>`;
}

// ---- Opens the modal, pre-filled with the found patient's name ----
function openBookingModal(recordId) {
  const r = records.find((x) => x.id === recordId);
  if (!r) return;
  pendingBookingRecordId = recordId;
  document.getElementById("apt-patient-display").value = `${r.name} (${r.id})`;
  document.getElementById("apt-date").value = "";
  document.getElementById("apt-time").value = "";
  document.getElementById("modal-backdrop").classList.add("open");
}
function closeModal() {
  document.getElementById("modal-backdrop").classList.remove("open");
  pendingBookingRecordId = null;
}

// ---- Confirms booking: creates the appointment with status "Pending" by default ----
function confirmBooking() {
  const date = document.getElementById("apt-date").value;
  const time = document.getElementById("apt-time").value;
  const errorBox = document.getElementById("TD-error");

  errorBox.innerHTML = "";
  if (!date || !time) {
    errorBox.innerHTML = `<div class="error-msg" >Please choose a date and time.</div>`;
    return;
  }
  errorBox.innerHTML = "";

  const r = records.find((x) => x.id === pendingBookingRecordId);
  appointments.unshift({
    recordId: r.id,
    name: r.name,
    date,
    time,
    status: "Pending",
  });

  closeModal();
  document.getElementById("search-input").value = "";
  document.getElementById("search-result").innerHTML = "";
  renderAppointments();
  showToast(`Appointment booked for ${r.name}`);
}

// ---- Applies the day filter: all / today / yesterday / this week / last week / last 2 weeks / past 3 months ----
function filterByDay(list) {
  const filter = document.getElementById("day-filter").value;
  if (filter === "all") return list;

  const today = new Date(offsetDate(0) + "T00:00:00");
  return list.filter((a) => {
    const apptDate = new Date(a.date + "T00:00:00");
    const daysAgo = Math.round((today - apptDate) / 86400000);

    if (filter === "today") return daysAgo === 0;
    if (filter === "yesterday") return daysAgo === 1;
    if (filter === "thisWeek") return daysAgo >= 0 && daysAgo <= 6;
    if (filter === "lastWeek") return daysAgo >= 7 && daysAgo <= 13;
    if (filter === "last2Weeks") return daysAgo >= 0 && daysAgo <= 13;
    if (filter === "past3Months") return daysAgo >= 0 && daysAgo <= 90;
    return true;
  });
}

// ---- Renders the Booked Appointments table, including each patient's last visit ----
function renderAppointments() {
  const container = document.getElementById("appts-table");
  const filtered = filterByDay(appointments);

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M9 9h.01M15 9h.01M9 15c.7.8 1.8 1.3 3 1.3s2.3-.5 3-1.3"/></svg>
        <p class="empty-title">No appointments for this filter</p>
        <p>Try a different range, or select "All" to see everything.</p>
      </div>`;
    return;
  }
  container.innerHTML = `
    <table>
      <thead><tr><th>Matric / Staff ID</th><th>Patient</th><th>Date</th><th>Time</th><th>Status</th><th>Last Visit</th></tr></thead>
      <tbody>
        ${filtered
          .map((a) => {
            const r = records.find((x) => x.id === a.recordId);
            return `<tr>
            <td><span class="id-chip">${a.recordId}</span></td>
            <td style="font-weight:600;">${a.name}</td>
            <td>${a.date}</td>
            <td>${a.time}</td>
            <td><span class="pill"><span class="pill-dot"></span>${a.status}</span></td>
            <td>${r && r.lastVisit ? r.lastVisit : "—"}</td>
          </tr>`;
          })
          .join("")}
      </tbody>
    </table>`;
}

function showToast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.style.display = "flex";
  setTimeout(() => {
    t.style.display = "none";
  }, 2400);
}

renderAppointments();
