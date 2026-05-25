import React, { useEffect, useRef, useState } from 'react';
import { FacebookIcon, InstagramIcon, TwitterIcon } from '../components/SocialBrandIcons';
import './Leadership.css';

// Reveal-on-scroll hook: triggers a one-time animation when an element enters the viewport
const useInViewOnce = (options = { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    // Fallback for environments without IntersectionObserver
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      options
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return [ref, inView];
};

// 2026 Curated BRS Leaders, Roles & Constituencies Database
const LEADERSHIP_DATA = [
  // PARTY TOP BRASS
  {
    name: "K. Chandrashekar Rao (KCR)",
    role: "President / Leader of Opposition",
    area: "Gajwel (MLA)",
    category: "top",
    categoryLabel: "Party Top Brass",
    tier: 1
  },
  {
    name: "K. T. Rama Rao (KTR)",
    role: "Working President / MLA",
    area: "Sircilla",
    category: "top",
    categoryLabel: "Party Top Brass",
    tier: 2
  },
  {
    name: "T. Harish Rao",
    role: "Senior Leader / MLA",
    area: "Siddipet",
    category: "top",
    categoryLabel: "Party Top Brass",
    tier: 2
  },
  {
    name: "Ravula Chandrasekhar Reddy",
    role: "General Secretary / Party In-charge",
    area: "Party Office",
    category: "top",
    categoryLabel: "Party Top Brass",
    tier: 3
  },

  // MLAs — HYDERABAD / RANGA REDDY
  {
    name: "Talasani Srinivas Yadav",
    role: "MLA",
    area: "Sanathnagar",
    category: "mla_hyd",
    categoryLabel: "MLAs — Hyderabad / Ranga Reddy"
  },
  {
    name: "Danam Nagender",
    role: "MLA",
    area: "Khairatabad",
    category: "mla_hyd",
    categoryLabel: "MLAs — Hyderabad / Ranga Reddy"
  },
  {
    name: "Maganti Gopinath",
    role: "MLA",
    area: "Jubilee Hills",
    category: "mla_hyd",
    categoryLabel: "MLAs — Hyderabad / Ranga Reddy"
  },
  {
    name: "T. Padma Rao",
    role: "MLA",
    area: "Secunderabad",
    category: "mla_hyd",
    categoryLabel: "MLAs — Hyderabad / Ranga Reddy"
  },
  {
    name: "Lasya Nanditha Sayanna",
    role: "MLA",
    area: "Secunderabad Cantt. (SC)",
    category: "mla_hyd",
    categoryLabel: "MLAs — Hyderabad / Ranga Reddy"
  },
  {
    name: "P. Sabitha Indra Reddy",
    role: "MLA",
    area: "Maheshwaram",
    category: "mla_hyd",
    categoryLabel: "MLAs — Hyderabad / Ranga Reddy"
  },

  // MLAs — KARIMNAGAR / WARANGAL REGION
  {
    name: "K. T. Rama Rao (KTR)",
    role: "MLA",
    area: "Sircilla",
    category: "mla_kar",
    categoryLabel: "MLAs — Karimnagar / Warangal"
  },
  {
    name: "Kalvakuntla Sanjay",
    role: "MLA",
    area: "Koratla",
    category: "mla_kar",
    categoryLabel: "MLAs — Karimnagar / Warangal"
  },
  {
    name: "Dr. Sanjay (Muthireddy)",
    role: "MLA",
    area: "Jagtial",
    category: "mla_kar",
    categoryLabel: "MLAs — Karimnagar / Warangal"
  },
  {
    name: "Kadiyam Srihari",
    role: "MLA",
    area: "Ghanpur Station (SC)",
    category: "mla_kar",
    categoryLabel: "MLAs — Karimnagar / Warangal"
  },
  {
    name: "Padi Kaushik Reddy",
    role: "MLA",
    area: "Huzurabad",
    category: "mla_kar",
    categoryLabel: "MLAs — Karimnagar / Warangal"
  },
  {
    name: "Prashanth Reddy Vemula",
    role: "MLA",
    area: "Balkonda",
    category: "mla_kar",
    categoryLabel: "MLAs — Karimnagar / Warangal"
  },
  {
    name: "Allola Indrakaran Reddy",
    role: "MLA",
    area: "Nirmal",
    category: "mla_kar",
    categoryLabel: "MLAs — Karimnagar / Warangal"
  },

  // MLAs — MEDAK / SANGAREDDY / NIZAMABAD REGION
  {
    name: "K. Chandrashekar Rao (KCR)",
    role: "MLA",
    area: "Gajwel",
    category: "mla_med",
    categoryLabel: "MLAs — Medak / Sangareddy / Nizamabad"
  },
  {
    name: "T. Harish Rao",
    role: "MLA",
    area: "Siddipet",
    category: "mla_med",
    categoryLabel: "MLAs — Medak / Sangareddy / Nizamabad"
  },
  {
    name: "Chinta Prabhakar",
    role: "MLA",
    area: "Sangareddy",
    category: "mla_med",
    categoryLabel: "MLAs — Medak / Sangareddy / Nizamabad"
  },
  {
    name: "Koninty Manik Rao",
    role: "MLA",
    area: "Zahirabad (SC)",
    category: "mla_med",
    categoryLabel: "MLAs — Medak / Sangareddy / Nizamabad"
  },
  {
    name: "Vakiti Sunitha Laxma Reddy",
    role: "MLA",
    area: "Narsapur",
    category: "mla_med",
    categoryLabel: "MLAs — Medak / Sangareddy / Nizamabad"
  },
  {
    name: "Mahareddy Bhupal Reddy",
    role: "MLA",
    area: "Narayankheda",
    category: "mla_med",
    categoryLabel: "MLAs — Medak / Sangareddy / Nizamabad"
  },
  {
    name: "Chanti Kranthi Kiran",
    role: "MLA",
    area: "Andole (SC)",
    category: "mla_med",
    categoryLabel: "MLAs — Medak / Sangareddy / Nizamabad"
  },
  {
    name: "Srinivas Reddy Parige (Pocharam)",
    role: "MLA",
    area: "Banswada",
    category: "mla_med",
    categoryLabel: "MLAs — Medak / Sangareddy / Nizamabad"
  },
  {
    name: "Mohammed Shakeel Aamir",
    role: "MLA",
    area: "Bodhan",
    category: "mla_med",
    categoryLabel: "MLAs — Medak / Sangareddy / Nizamabad"
  },
  {
    name: "Ashannagari Jeevan Reddy",
    role: "MLA",
    area: "Armoor",
    category: "mla_med",
    categoryLabel: "MLAs — Medak / Sangareddy / Nizamabad"
  },

  // MLAs — ADILABAD / MANCHERIAL / NIRMAL
  {
    name: "Jogu Ramanna",
    role: "MLA",
    area: "Adilabad",
    category: "mla_adi",
    categoryLabel: "MLAs — Adilabad / Mancherial / Nirmal"
  },
  {
    name: "Balka Suman",
    role: "MLA",
    area: "Chennur (SC)",
    category: "mla_adi",
    categoryLabel: "MLAs — Adilabad / Mancherial / Nirmal"
  },
  {
    name: "Durgam Chinnaiah",
    role: "MLA",
    area: "Bellampalli (SC)",
    category: "mla_adi",
    categoryLabel: "MLAs — Adilabad / Mancherial / Nirmal"
  },
  {
    name: "Nadipelli Divakar Rao",
    role: "MLA",
    area: "Mancherial",
    category: "mla_adi",
    categoryLabel: "MLAs — Adilabad / Mancherial / Nirmal"
  },
  {
    name: "Koneru Konappa",
    role: "MLA",
    area: "Sirpur",
    category: "mla_adi",
    categoryLabel: "MLAs — Adilabad / Mancherial / Nirmal"
  },
  {
    name: "Bhukya Johnson Rathod Naik",
    role: "MLA",
    area: "Khanapur (ST)",
    category: "mla_adi",
    categoryLabel: "MLAs — Adilabad / Mancherial / Nirmal"
  },
  {
    name: "Kova Laxmi",
    role: "MLA",
    area: "Asifabad (ST)",
    category: "mla_adi",
    categoryLabel: "MLAs — Adilabad / Mancherial / Nirmal"
  },
  {
    name: "Anil Jadhav",
    role: "MLA",
    area: "Boath (ST)",
    category: "mla_adi",
    categoryLabel: "MLAs — Adilabad / Mancherial / Nirmal"
  },

  // MLAs — KHAMMAM / BHADRADRI / OTHER
  {
    name: "Dr. Tellam Venkata Rao",
    role: "MLA",
    area: "Bhadrachalam (ST)",
    category: "mla_kha",
    categoryLabel: "MLAs — Khammam / Bhadradri / Other"
  },
  {
    name: "Bandla Krishna Mohan Reddy",
    role: "MLA",
    area: "Gadwal",
    category: "mla_kha",
    categoryLabel: "MLAs — Khammam / Bhadradri / Other"
  },
  {
    name: "Vijayudu",
    role: "MLA",
    area: "Alampur (SC)",
    category: "mla_kha",
    categoryLabel: "MLAs — Khammam / Bhadradri / Other"
  },
  {
    name: "Kaleru Venkatesh",
    role: "MLA",
    area: "Amberpet",
    category: "mla_kha",
    categoryLabel: "MLAs — Khammam / Bhadradri / Other"
  },
  {
    name: "Gaddigari Vittal Reddy",
    role: "MLA",
    area: "Mudhole",
    category: "mla_kha",
    categoryLabel: "MLAs — Khammam / Bhadradri / Other"
  },

  // MLCs / SENIOR LEADERS
  {
    name: "B. Madhusudhan Chary",
    role: "MLC",
    area: "BRS Legislative Council Member",
    category: "mlc",
    categoryLabel: "MLCs & Senior Leaders"
  },
  {
    name: "LV Ramana",
    role: "MLC",
    area: "BRS Legislative Council Member",
    category: "mlc",
    categoryLabel: "MLCs & Senior Leaders"
  }
];

// Helper to generate elegant profile initials
const getInitials = (name) => {
  if (name.includes('(KCR)')) return 'KCR';
  if (name.includes('(KTR)')) return 'KTR';
  
  // Clean titles & initials to find main names
  let cleaned = name.replace(/^(Dr\.|Dr|K\.|T\.|M\.|S\.|R\.|V\.|Y\.|D\.|P\.|L\.|C\.)\s+/gi, '');
  cleaned = cleaned.replace(/[^a-zA-Z ]/g, "").trim();
  const words = cleaned.split(/\s+/).filter(w => w.length > 0);
  
  if (words.length === 0) return 'BR';
  if (words.length === 1) return words[0].substring(0, 2).toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
};

// Helper to return beautiful category gradients
const getCategoryGradient = (category) => {
  switch (category) {
    case 'top':
      return 'linear-gradient(135deg, #ec008c 0%, #7c0049 100%)';
    case 'mla_hyd':
      return 'linear-gradient(135deg, #ff5e62 0%, #ff9966 100%)';
    case 'mla_kar':
      return 'linear-gradient(135deg, #3a7bd5 0%, #3a6073 100%)';
    case 'mla_med':
      return 'linear-gradient(135deg, #654ea3 0%, #ea384d 100%)';
    case 'mla_adi':
      return 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)';
    case 'mla_kha':
      return 'linear-gradient(135deg, #f27121 0%, #e94057 100%)';
    case 'mlc':
      return 'linear-gradient(135deg, #4776e6 0%, #8e54e9 100%)';
    default:
      return 'linear-gradient(135deg, #ec008c 0%, #9a005a 100%)';
  }
};

// Brief description generated based on leader's category and role
const getLeaderDescription = (leader) => {
  switch (leader.category) {
    case 'top':
      if (leader.tier === 1) {
        return `Visionary founder steering BRS with conviction, championing Telangana's identity and a future-ready welfare state.`;
      }
      if (leader.tier === 2) {
        return `Energetic leader driving the party's grassroots strength while shaping policy that uplifts every family across Telangana.`;
      }
      return `Trusted organiser of party affairs, ensuring discipline, coordination and a strong on-ground BRS presence statewide.`;
    case 'mlc':
      return `Legislative Council Member contributing nuanced debate, oversight and policy refinement in the Telangana Legislative Council.`;
    default:
      return `Elected representative of ${leader.area}, committed to development, welfare and the daily concerns of the constituency.`;
  }
};

// Enrich LEADERSHIP_DATA dynamically with emails, phone numbers, and social links
const ENRICHED_LEADERSHIP_DATA = LEADERSHIP_DATA.map((leader) => {
  const nameSlug = leader.name
    .toLowerCase()
    .replace(/^(dr\.|dr|k\.|t\.|m\.|s\.|r\.|v\.|y\.|d\.|p\.|l\.|c\.)\s+/g, '')
    .replace(/[^a-z0-9]/g, '');
  
  let phone = "+91 40 2345 6789";
  let email = `${nameSlug}@brsparty.org`;
  
  if (leader.name.includes('Chandrashekar')) {
    phone = "+91 40 2300 0001";
    email = "kcr.office@brsparty.org";
  } else if (leader.name.includes('Rama Rao')) {
    phone = "+91 40 2300 0002";
    email = "ktr.office@brsparty.org";
  } else if (leader.name.includes('Harish Rao')) {
    phone = "+91 40 2300 0003";
    email = "harish.office@brsparty.org";
  } else {
    const code = leader.name.length * 133 + leader.area.length * 7;
    const num = 10000 + (code % 90000);
    phone = `+91 98480 ${num}`;
  }

  return {
    ...leader,
    phone,
    email,
    twitter: "https://twitter.com/brsparty",
    instagram: "https://instagram.com/brsparty",
    facebook: "https://facebook.com/brsparty"
  };
});

const MemberCard = ({ leader, index = 0 }) => {
  const initials = getInitials(leader.name);
  const gradient = getCategoryGradient(leader.category);
  const description = getLeaderDescription(leader);
  const [cardRef, inView] = useInViewOnce();

  // Stagger reveal across the 4 columns so the row cascades softly in from the top
  const staggerDelay = `${(index % 4) * 130}ms`;

  return (
    <article
      ref={cardRef}
      className={`leader-card reveal-from-top ${inView ? 'is-visible' : ''}`}
      style={{ transitionDelay: inView ? staggerDelay : '0ms' }}
    >
      <div className="leader-card-avatar-wrap">
        <div className="leader-card-avatar" style={{ background: gradient }}>
          {initials}
        </div>
      </div>

      <h3 className="leader-card-name">{leader.name}</h3>
      <span className="leader-card-role">{leader.role}</span>

      <div className="leader-card-socials">
        <a
          href={leader.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="leader-social-icon twitter"
          aria-label="Twitter"
        >
          <TwitterIcon size={12} />
        </a>
        <a
          href={leader.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="leader-social-icon instagram"
          aria-label="Instagram"
        >
          <InstagramIcon size={12} />
        </a>
        <a
          href={leader.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="leader-social-icon facebook"
          aria-label="Facebook"
        >
          <FacebookIcon size={12} />
        </a>
      </div>

      <p className="leader-card-description">{description}</p>

      <div className="leader-card-fact">
        <span className="leader-card-fact-dot" />
        <span className="leader-card-fact-text">Constituency : {leader.area}</span>
      </div>
    </article>
  );
};

// Mapping from leader category -> friendly district label
const DISTRICT_BY_CATEGORY = {
  top: 'Party Office',
  mla_hyd: 'Hyderabad / Ranga Reddy',
  mla_kar: 'Karimnagar / Warangal',
  mla_med: 'Medak / Sangareddy / Nizamabad',
  mla_adi: 'Adilabad / Mancherial / Nirmal',
  mla_kha: 'Khammam / Bhadradri / Other',
  mlc: 'Legislative Council'
};

// Simplified role label from the verbose role field
const getSimpleRole = (roleString) => {
  if (/working president/i.test(roleString)) return 'Working President';
  if (/leader of opposition|president/i.test(roleString)) return 'President';
  if (/general secretary/i.test(roleString)) return 'General Secretary';
  if (/senior leader/i.test(roleString)) return 'Senior Leader';
  if (/mlc/i.test(roleString)) return 'MLC';
  if (/mla/i.test(roleString)) return 'MLA';
  return roleString;
};

// Simple Pill-Style Dropdown used inside the unified toolbar
const ToolbarDropdown = ({ label, placeholder, value, options, onChange }) => {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  const displayLabel = value ? value : placeholder;

  return (
    <div className={`toolbar-dropdown ${open ? 'open' : ''}`} ref={wrapperRef}>
      <button
        type="button"
        className={`toolbar-dropdown-trigger ${value ? 'has-value' : ''}`}
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={label}
      >
        <span className="toolbar-dropdown-label">{displayLabel}</span>
        <svg
          className="toolbar-dropdown-chevron"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M3 4.5L6 7.5L9 4.5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open && (
        <ul className="toolbar-dropdown-menu" role="listbox">
          <li
            role="option"
            aria-selected={!value}
            className={`toolbar-dropdown-option ${!value ? 'selected' : ''}`}
            onClick={() => {
              onChange('');
              setOpen(false);
            }}
          >
            {placeholder}
          </li>
          {options.map((opt) => (
            <li
              key={opt}
              role="option"
              aria-selected={value === opt}
              className={`toolbar-dropdown-option ${value === opt ? 'selected' : ''}`}
              onClick={() => {
                onChange(opt);
                setOpen(false);
              }}
            >
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const Leadership = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [roleFilter, setRoleFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [districtFilter, setDistrictFilter] = useState('');

  // Build dropdown options from the enriched data
  const roleOptions = Array.from(
    new Set(ENRICHED_LEADERSHIP_DATA.map((l) => getSimpleRole(l.role)))
  ).sort();

  const categoryOptions = [
    'Party Top Brass',
    'MLAs',
    'MLCs & Senior Leaders'
  ];

  const districtOptions = Array.from(
    new Set(
      ENRICHED_LEADERSHIP_DATA.map((l) => DISTRICT_BY_CATEGORY[l.category]).filter(Boolean)
    )
  ).sort();

  // Mapping for category dropdown -> set of internal category keys
  const matchesCategoryDropdown = (leader) => {
    if (!categoryFilter) return true;
    if (categoryFilter === 'Party Top Brass') return leader.category === 'top';
    if (categoryFilter === 'MLAs') return leader.category.startsWith('mla_');
    if (categoryFilter === 'MLCs & Senior Leaders') return leader.category === 'mlc';
    return true;
  };

  const filteredLeaders = ENRICHED_LEADERSHIP_DATA.filter((leader) => {
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !q ||
      leader.name.toLowerCase().includes(q) ||
      leader.area.toLowerCase().includes(q) ||
      leader.role.toLowerCase().includes(q);

    const matchesRole = !roleFilter || getSimpleRole(leader.role) === roleFilter;
    const matchesCategory = matchesCategoryDropdown(leader);
    const matchesDistrict =
      !districtFilter || DISTRICT_BY_CATEGORY[leader.category] === districtFilter;

    return matchesSearch && matchesRole && matchesCategory && matchesDistrict;
  });

  // Section headings to render — only sections that still have data after filtering
  const sectionDefinitions = [
    { id: 'top', label: 'Party Top Brass' },
    { id: 'mla_hyd', label: 'MLAs — Hyd / Ranga Reddy' },
    { id: 'mla_kar', label: 'MLAs — Karimnagar / Warangal' },
    { id: 'mla_med', label: 'MLAs — Medak / Sangareddy / Nizamabad' },
    { id: 'mla_adi', label: 'MLAs — Adilabad / Mancherial / Nirmal' },
    { id: 'mla_kha', label: 'MLAs — Khammam / Bhadradri / Other' },
    { id: 'mlc', label: 'MLCs & Senior Leaders' }
  ];

  const hasAnyFilter =
    Boolean(searchQuery) || Boolean(roleFilter) || Boolean(categoryFilter) || Boolean(districtFilter);

  const resetFilters = () => {
    setSearchQuery('');
    setRoleFilter('');
    setCategoryFilter('');
    setDistrictFilter('');
  };

  return (
    <div className="leadership-page">
      <div className="leadership-glow-bg" />

      <header className="leadership-header-sec">
        <span className="leadership-eyebrow">Leadership &amp; Public Representatives</span>
        <h1>Leading Telangana Forward</h1>
        <p>
        Meet the leadership driving public welfare, development initiatives, and the future vision of Telangana.
        </p>
      </header>

      {/* Unified search + filter toolbar */}
      <section className="leadership-toolbar-wrapper">
        <div className="leadership-toolbar">
          <div className="toolbar-search">
            <svg
              className="toolbar-search-icon"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.6" />
              <path
                d="M11 11L14 14"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
            <input
              type="text"
              className="toolbar-search-input"
              placeholder="Search leaders..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="toolbar-divider" />

          <ToolbarDropdown
            label="Filter by role"
            placeholder="All Roles"
            value={roleFilter}
            options={roleOptions}
            onChange={setRoleFilter}
          />

          <div className="toolbar-divider" />

          <ToolbarDropdown
            label="Filter by category"
            placeholder="All Categories"
            value={categoryFilter}
            options={categoryOptions}
            onChange={setCategoryFilter}
          />

          <div className="toolbar-divider" />

          <ToolbarDropdown
            label="Filter by district"
            placeholder="All Districts"
            value={districtFilter}
            options={districtOptions}
            onChange={setDistrictFilter}
          />

          <div className="toolbar-divider" />

          <button
            type="button"
            className={`toolbar-reset ${hasAnyFilter ? 'is-active' : ''}`}
            onClick={resetFilters}
            disabled={!hasAnyFilter}
            aria-label="Reset all filters"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M2 7a5 5 0 1 1 1.46 3.54"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
              <path
                d="M2 3v3.5h3.5"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Reset Filters</span>
          </button>
        </div>
      </section>

      {/* Grid displaying Leaders in 4-per-row layout */}
      <main className="leadership-grid-container">
        {filteredLeaders.length > 0 ? (
          <div className="leadership-sections-list">
            {sectionDefinitions.map((category) => {
              const catLeaders = filteredLeaders.filter((l) => l.category === category.id);
              if (catLeaders.length === 0) return null;

              return (
                <section key={category.id} className="leadership-section-row">
                  <h2 className="leadership-section-title">{category.label}</h2>

                  <div className="leadership-section-right">
                    <div className="peers-grid">
                      {catLeaders.map((leader, idx) => (
                        <MemberCard
                          key={`${leader.name}-${leader.area}`}
                          leader={leader}
                          index={idx}
                        />
                      ))}
                    </div>
                  </div>
                </section>
              );
            })}
          </div>
        ) : (
          <div className="leadership-no-results">
            <h3>No Leaders Found</h3>
            <p>
              We couldn't find any leadership profile matching your current filters.
              Try clearing them or revising your search.
            </p>
            <button
              type="button"
              className="toolbar-reset is-active leadership-no-results-reset"
              onClick={resetFilters}
            >
              Reset Filters
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default Leadership;
