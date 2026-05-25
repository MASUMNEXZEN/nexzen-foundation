export default function NtseJsonLd() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Event",
      "name": "Nexzen Talent Search Examination (NTSE) 2026",
      "description": "A 4-tier merit-based talent search examination for students in Classes II to IX across West Bengal. Students win financial scholarships, medals, and participation certificates.",
      "startDate": "2026-09-01",
      "endDate": "2027-03-31",
      "eventStatus": "https://schema.org/EventScheduled",
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
      "location": { "@type": "State", "name": "West Bengal", "addressCountry": "IN" },
      "organizer": { "@type": "Organization", "name": "NexZen Foundation", "url": "https://www.nexzenfoundation.in" },
      "offers": { "@type": "Offer", "price": "249", "priceCurrency": "INR", "availability": "https://schema.org/InStock", "url": "https://www.nexzenfoundation.in/ntse" },
      "audience": { "@type": "EducationalAudience", "educationalRole": "student" },
      "url": "https://www.nexzenfoundation.in/ntse"
    },
    {
      "@context": "https://schema.org",
      "@type": "EducationalOccupationalProgram",
      "name": "Nexzen Talent Search Examination",
      "description": "Merit-based talent search examination for Classes II-IX with scholarships for top performers",
      "provider": { "@type": "Organization", "name": "NexZen Foundation" },
      "educationalProgramMode": "offline",
      "url": "https://www.nexzenfoundation.in/ntse"
    }
  ];
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
