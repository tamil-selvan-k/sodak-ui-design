/* ─────────────────────────────────────────────
   SoDak EduTech — Shared Layout (Navbar + Footer + Floats)
   Inject via: <script src="../layout.js"></script>
   ───────────────────────────────────────────── */

(function () {
  'use strict';

  /* ── Page map (for active state + breadcrumbs) ── */
  const PAGES = [
    { href: 'index.html',             label: 'Home' },
    { href: 'about.html',             label: 'About' },
    { href: 'trainers.html',          label: 'Trainers',     group: 'Trainers' },
    { href: 'trainer-profile.html',   label: 'Trainer Profile', group: 'Trainers', parent: 'trainers.html' },
    { href: 'mentors.html',           label: 'Mentors',      group: 'Learn' },
    { href: 'mentor-profile.html',    label: 'Mentor Profile', group: 'Learn', parent: 'mentors.html' },
    { href: 'courses.html',           label: 'Courses',      group: 'Learn' },
    { href: 'programs.html',          label: 'Programs',     group: 'Learn' },
    { href: 'program-detail.html',    label: 'Program Detail', group: 'Learn', parent: 'programs.html' },
    { href: 'training.html',          label: 'Training',     group: 'Learn' },
    { href: 'training-cloud.html',    label: 'Cloud & AWS',  group: 'Learn', parent: 'training.html' },
    { href: 'institutions.html',      label: 'Institutions', group: 'Institutions' },
    { href: 'institution-detail.html',label: 'SJCE',         group: 'Institutions', parent: 'institutions.html' },
    { href: 'gallery.html',           label: 'Gallery' },
    { href: 'platform.html',          label: 'Platform',     group: 'Platform' },
    { href: 'platform-ctf.html',      label: 'CTF',          group: 'Platform', parent: 'platform.html' },
    { href: 'platform-lms.html',      label: 'LMS',          group: 'Platform', parent: 'platform.html' },
    { href: 'platform-assessments.html', label: 'Assessments', group: 'Platform', parent: 'platform.html' },
    { href: 'webinars.html',          label: 'Webinars',     group: 'Learn' },
    { href: 'internships.html',       label: 'Internships',  group: 'Learn' },
    { href: 'corporate.html',         label: 'Corporate' },
    { href: 'insights.html',          label: 'Blog',         group: 'Blog' },
    { href: 'insights-post.html',     label: 'Post',         group: 'Blog', parent: 'insights.html' },
    { href: 'careers.html',           label: 'Careers',      group: 'Careers' },
    { href: 'career-detail.html',     label: 'Role Detail',  group: 'Careers', parent: 'careers.html' },
    { href: 'contact.html',           label: 'Contact' },
    { href: 'privacy.html',           label: 'Privacy Policy' },
    { href: 'terms.html',             label: 'Terms' },
    { href: 'admin/dashboard.html',   label: 'Admin' },
    { href: 'admin/enquiries.html',   label: 'Enquiries',    group: 'Admin' },
    { href: 'admin/mentors.html',     label: 'Mentors Admin',group: 'Admin' },
    { href: 'admin/courses.html',     label: 'Courses Admin',group: 'Admin' },
  ];

  /* ── Nav dropdown data ── */
  const DROPDOWNS = {
    Learn: [
      { href: 'courses.html',        label: '📘  Courses (Domain-based)' },
      { href: 'programs.html',       label: '🎯  Campus Programs' },
      { href: 'training.html',       label: '⚙  Training Stacks' },
      { href: 'mentors.html',        label: '🧑‍💼  Mentors (1-on-1)' },
      { href: 'webinars.html',       label: '🎙  Webinars' },
      { href: 'internships.html',    label: '🎓  Internships' },
    ],
    Platform: [
      { href: 'platform.html',    label: 'Platform Overview',       external: false },
      { href: '#',                label: '🏴  SoDak CTF Platform ↗', external: true },
      { href: '#',                label: '📚  SoDak LMS ↗',          external: true },
      { href: '#',                label: '📋  Assessment Engine ↗',   external: true },
    ],
    Careers: [
      { href: 'careers.html',        label: 'Work at SoDak' },
      { href: 'internships.html',    label: '🎓  Internships' },
    ],
  };

  /* ── Resolve paths (works from root and admin/ subdirs) ── */
  const currentFile = location.pathname.split('/').pop() || 'index.html';
  const isAdmin = location.pathname.includes('/admin/');
  const ROOT = isAdmin ? '../' : './';

  function resolveHref(href) {
    return href.startsWith('admin/') && !isAdmin
      ? ROOT + href
      : isAdmin && !href.startsWith('admin/') ? ROOT + href
      : href;
  }

  /* ── Find current page record ── */
  const currentRecord = PAGES.find(p => p.href === (isAdmin ? 'admin/' + currentFile : currentFile));

  /* ── Build navbar HTML ── */
  function buildNavbar() {
    const navItems = [
      { label: 'About',        href: 'about.html' },
      { label: 'Trainers',     href: 'trainers.html' },
      { label: 'Learn',        href: 'courses.html',   dropdown: 'Learn' },
      { label: 'Institutions', href: 'institutions.html' },
      { label: 'Platform',     href: 'platform.html',  dropdown: 'Platform' },
      { label: 'Careers',      href: 'careers.html',   dropdown: 'Careers' },
      { label: 'Contact',      href: 'contact.html' },
    ];

    const activeGroup = currentRecord && currentRecord.group;

    const itemsHTML = navItems.map(item => {
      const isActive = item.href === (isAdmin ? '' : currentFile)
        || (activeGroup && item.dropdown === activeGroup);
      const dd = item.dropdown && DROPDOWNS[item.dropdown];
      const ddHTML = dd ? `
        <div class="nav-dropdown">
          ${dd.map(d => `<a href="${resolveHref(d.href)}" class="nav-dropdown-item"${d.external ? ' target="_blank" rel="noopener"' : ''}>${d.label}</a>`).join('')}
        </div>` : '';
      return `<li class="nav-item${dd ? ' has-dropdown' : ''}">
        <a href="${resolveHref(item.href)}" class="nav-link${isActive ? ' active' : ''}">${item.label}${dd ? '<span class="nav-arrow">▾</span>' : ''}</a>
        ${ddHTML}
      </li>`;
    }).join('');

    return `
<nav class="site-nav" id="site-nav">
  <div class="nav-inner">
    <a href="${ROOT}index.html" class="nav-logo">
      <span class="nav-logo-text">SoDak</span>
      <span class="nav-logo-sub">EduTech</span>
    </a>
    <button class="nav-hamburger" id="nav-hamburger" aria-label="Menu">☰</button>
    <ul class="nav-links" id="nav-links">${itemsHTML}</ul>
    <div class="nav-actions">
      <a href="${ROOT}contact.html" class="btn btn-gold btn-sm">Book a Program →</a>
    </div>
  </div>
</nav>`;
  }

  /* ── Build footer HTML ── */
  function buildFooter() {
    return `
<footer class="site-footer" style="background:#0a1628;border-top:1px solid rgba(7,88,146,0.2);">
  <div class="container" style="padding-top:64px;">

    <!-- Top strip: brand + CTA -->
    <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:32px;padding-bottom:48px;border-bottom:1px solid rgba(255,255,255,0.07);flex-wrap:wrap;">
      <div style="max-width:300px;">
        <div class="nav-logo" style="margin-bottom:14px;">
          <span class="nav-logo-text" style="color:#fff !important;font-size:22px;">SoDak</span>
          <span class="nav-logo-sub" style="color:rgba(255,255,255,0.5) !important;font-size:22px;">EduTech</span>
        </div>
        <p style="font-size:14px;color:rgba(255,255,255,0.5);line-height:1.75;margin-bottom:20px;">Campus training by engineers who cleared the interviews your students are preparing for. Placement-first. Practice-led. Industry-backed.</p>
        <div style="display:flex;gap:8px;">
          <a href="#" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.1);display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;color:rgba(255,255,255,0.6);transition:background 0.15s,color 0.15s;" onmouseover="this.style.background='rgba(7,88,146,0.4)';this.style.color='#fff'" onmouseout="this.style.background='rgba(255,255,255,0.07)';this.style.color='rgba(255,255,255,0.6)'">in</a>
          <a href="#" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.1);display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;color:rgba(255,255,255,0.6);transition:background 0.15s,color 0.15s;" onmouseover="this.style.background='rgba(7,88,146,0.4)';this.style.color='#fff'" onmouseout="this.style.background='rgba(255,255,255,0.07)';this.style.color='rgba(255,255,255,0.6)'">tw</a>
          <a href="#" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.1);display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;color:rgba(255,255,255,0.6);transition:background 0.15s,color 0.15s;" onmouseover="this.style.background='rgba(7,88,146,0.4)';this.style.color='#fff'" onmouseout="this.style.background='rgba(255,255,255,0.07)';this.style.color='rgba(255,255,255,0.6)'">yt</a>
          <a href="https://wa.me/918939366259" target="_blank" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.1);display:flex;align-items:center;justify-content:center;font-size:14px;color:rgba(255,255,255,0.6);" onmouseover="this.style.background='rgba(7,88,146,0.4)';this.style.color='#fff'" onmouseout="this.style.background='rgba(255,255,255,0.07)';this.style.color='rgba(255,255,255,0.6)'">💬</a>
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:16px;flex-wrap:wrap;">
        <div style="text-align:right;">
          <p style="font-size:13px;color:rgba(255,255,255,0.4);margin-bottom:4px;">Ready to upskill your campus?</p>
          <p style="font-size:13px;color:rgba(255,255,255,0.6);">📞 +91 89393 66259 &nbsp;·&nbsp; ✉ hello@sodakedutech.in</p>
        </div>
        <a href="${ROOT}contact.html" style="display:inline-flex;align-items:center;gap:8px;padding:10px 22px;background:#075892;color:#fff;border-radius:8px;font-size:14px;font-weight:600;white-space:nowrap;transition:background 0.15s;" onmouseover="this.style.background='#0669ab'" onmouseout="this.style.background='#075892'">Book a Program →</a>
      </div>
    </div>

    <!-- Link columns -->
    <div class="footer-grid" style="padding-top:40px;padding-bottom:48px;">
      <div>
        <p class="footer-col-title">Programs</p>
        <ul class="footer-links">
          <li><a href="${ROOT}programs.html">All Campus Programs</a></li>
          <li><a href="${ROOT}program-detail.html">Track A — Placement Prep</a></li>
          <li><a href="${ROOT}program-detail.html">Track B — Cloud &amp; DevOps</a></li>
          <li><a href="${ROOT}program-detail.html">Track C — Generative AI</a></li>
          <li><a href="${ROOT}program-detail.html">Track D — Cybersecurity</a></li>
          <li><a href="${ROOT}corporate.html">Corporate &amp; FDP</a></li>
        </ul>
      </div>
      <div>
        <p class="footer-col-title">Learn</p>
        <ul class="footer-links">
          <li><a href="${ROOT}courses.html">Courses</a></li>
          <li><a href="${ROOT}training.html">Training Stacks</a></li>
          <li><a href="${ROOT}mentors.html">1-on-1 Mentors</a></li>
          <li><a href="${ROOT}webinars.html">Webinars</a></li>
          <li><a href="${ROOT}internships.html">Internships</a></li>
        </ul>
      </div>
      <div>
        <p class="footer-col-title">Platform</p>
        <ul class="footer-links">
          <li><a href="${ROOT}platform.html">Platform Overview</a></li>
          <li><a href="#">SoDak CTF ↗</a></li>
          <li><a href="#">SoDak LMS ↗</a></li>
          <li><a href="#">Assessment Engine ↗</a></li>
        </ul>
      </div>
      <div>
        <p class="footer-col-title">Company</p>
        <ul class="footer-links">
          <li><a href="${ROOT}about.html">About SoDak</a></li>
          <li><a href="${ROOT}trainers.html">Our Trainers</a></li>
          <li><a href="${ROOT}institutions.html">Partner Institutions</a></li>
          <li><a href="${ROOT}insights.html">Blog &amp; Insights</a></li>
          <li><a href="${ROOT}careers.html">Careers</a></li>
          <li><a href="${ROOT}gallery.html">Gallery</a></li>
        </ul>
      </div>
      <div>
        <p class="footer-col-title">Location</p>
        <ul class="footer-links" style="gap:10px;">
          <li style="color:rgba(255,255,255,0.45);font-size:13px;line-height:1.6;">📍 Chennai, Tamil Nadu<br>India — 600 001</li>
          <li><a href="tel:+918939366259">📞 +91 89393 66259</a></li>
          <li><a href="mailto:hello@sodakedutech.in">✉ hello@sodakedutech.in</a></li>
          <li><a href="https://wa.me/918939366259" target="_blank">💬 Chat on WhatsApp</a></li>
        </ul>
      </div>
    </div>

    <!-- Bottom bar -->
    <div style="border-top:1px solid rgba(255,255,255,0.07);padding:20px 0;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;">
      <span style="font-size:13px;color:rgba(255,255,255,0.3);">© 2026 SoDak EduTech Pvt. Ltd. All rights reserved.</span>
      <div style="display:flex;align-items:center;gap:20px;font-size:13px;">
        <a href="${ROOT}privacy.html" style="color:rgba(255,255,255,0.35);transition:color 0.12s;" onmouseover="this.style.color='rgba(255,255,255,0.7)'" onmouseout="this.style.color='rgba(255,255,255,0.35)'">Privacy Policy</a>
        <a href="${ROOT}terms.html" style="color:rgba(255,255,255,0.35);transition:color 0.12s;" onmouseover="this.style.color='rgba(255,255,255,0.7)'" onmouseout="this.style.color='rgba(255,255,255,0.35)'">Terms of Service</a>
        <a href="${ROOT}admin/dashboard.html" style="color:rgba(7,88,146,0.5);transition:color 0.12s;" onmouseover="this.style.color='rgba(7,88,146,0.9)'" onmouseout="this.style.color='rgba(7,88,146,0.5)'">Admin ↗</a>
      </div>
    </div>

  </div>
</footer>`;
  }

  /* ── Build float buttons ── */
  function buildFloats() {
    return `
<div class="float-btns">
  <a href="https://wa.me/918939366259?text=Hi%20SoDak%20Team%2C%20I%20want%20to%20enquire%20about%20campus%20training." target="_blank" class="float-btn float-wa" title="WhatsApp us">💬</a>
  <a href="tel:+918939366259" class="float-btn float-tel" title="Call us">📞</a>
</div>`;
  }

  /* ── Inject ── */
  function inject(id, html) {
    const el = document.getElementById(id);
    if (el) el.outerHTML = html;
  }

  document.addEventListener('DOMContentLoaded', function () {
    inject('site-nav', buildNavbar());
    inject('site-footer', buildFooter());
    inject('site-float', buildFloats());

    /* Mobile menu toggle */
    const ham = document.getElementById('nav-hamburger');
    const links = document.getElementById('nav-links');
    if (ham && links) {
      ham.addEventListener('click', () => {
        links.classList.toggle('open');
        ham.textContent = links.classList.contains('open') ? '✕' : '☰';
      });
    }

    /* Dropdown on hover (desktop) */
    document.querySelectorAll('.nav-item.has-dropdown').forEach(item => {
      item.addEventListener('mouseenter', () => item.classList.add('dropdown-open'));
      item.addEventListener('mouseleave', () => item.classList.remove('dropdown-open'));
    });

    /* Accordion toggle */
    document.querySelectorAll('.accordion-header').forEach(header => {
      header.addEventListener('click', () => {
        const item = header.closest('.accordion-item');
        const wasOpen = item.classList.contains('open');
        document.querySelectorAll('.accordion-item.open').forEach(i => i.classList.remove('open'));
        if (!wasOpen) item.classList.add('open');
      });
    });

    /* FAQ toggle */
    document.querySelectorAll('.faq-header').forEach(header => {
      header.addEventListener('click', () => {
        const item = header.closest('.faq-item');
        const wasOpen = item.classList.contains('open');
        document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
        if (!wasOpen) item.classList.add('open');
      });
    });

    /* Smooth count-up for stat values */
    const counters = document.querySelectorAll('[data-countup]');
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseFloat(el.dataset.countup);
        const suffix = el.dataset.suffix || '';
        const duration = 1200;
        const start = performance.now();
        const isFloat = target % 1 !== 0;
        function step(now) {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const value = eased * target;
          el.textContent = (isFloat ? value.toFixed(1) : Math.round(value)) + suffix;
          if (progress < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
        io.unobserve(el);
      });
    }, { threshold: 0.4 });
    counters.forEach(c => io.observe(c));
  });

})();
