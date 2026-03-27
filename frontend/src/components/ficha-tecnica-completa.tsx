// 🎬 MEJORAR FICHA TÉCNICA - Agregar estos departamentos al case 'technical':

// Después de Montaje, agregar estos departamentos:

{/* Diseño de Producción */}
{getCrewByJob('Production Design').length > 0 && (
  <div className={styles.crewDepartment}>
    <h4 className={styles.departmentTitle}>
      <Palette size={18} /> Diseño de Producción
    </h4>
    <div className={styles.crewMembers}>
      {getCrewByJob('Production Design').map((person, idx) => (
        <span key={idx} className={styles.crewMember}>
          {person.name}
        </span>
      ))}
    </div>
  </div>
)}

{/* Dirección de Arte */}
{getCrewByJob('Art Direction').length > 0 && (
  <div className={styles.crewDepartment}>
    <h4 className={styles.departmentTitle}>
      <Palette size={18} /> Dirección de Arte
    </h4>
    <div className={styles.crewMembers}>
      {getCrewByJob('Art Direction').map((person, idx) => (
        <span key={idx} className={styles.crewMember}>
          {person.name}
        </span>
      ))}
    </div>
  </div>
)}

{/* Vestuario */}
{getCrewByJob('Costume Design').length > 0 && (
  <div className={styles.crewDepartment}>
    <h4 className={styles.departmentTitle}>
      <Palette size={18} /> Diseño de Vestuario
    </h4>
    <div className={styles.crewMembers}>
      {getCrewByJob('Costume Design').map((person, idx) => (
        <span key={idx} className={styles.crewMember}>
          {person.name}
        </span>
      ))}
    </div>
  </div>
)}

{/* Efectos Visuales */}
{getCrewByJob('Visual Effects').length > 0 && (
  <div className={styles.crewDepartment}>
    <h4 className={styles.departmentTitle}>
      <Zap size={18} /> Efectos Visuales
    </h4>
    <div className={styles.crewMembers}>
      {getCrewByJob('Visual Effects').map((person, idx) => (
        <span key={idx} className={styles.crewMember}>
          {person.name}
        </span>
      ))}
    </div>
  </div>
)}

{/* Sonido */}
{getCrewByJob('Sound').length > 0 && (
  <div className={styles.crewDepartment}>
    <h4 className={styles.departmentTitle}>
      <Music size={18} /> Diseño de Sonido
    </h4>
    <div className={styles.crewMembers}>
      {getCrewByJob('Sound').concat(getCrewByJob('Sound Designer')).map((person, idx) => (
        <span key={idx} className={styles.crewMember}>
          {person.name}
        </span>
      ))}
    </div>
  </div>
)}

{/* Maquillaje */}
{getCrewByJob('Makeup Artist').length > 0 && (
  <div className={styles.crewDepartment}>
    <h4 className={styles.departmentTitle}>
      <Palette size={18} /> Maquillaje
    </h4>
    <div className={styles.crewMembers}>
      {getCrewByJob('Makeup Artist').concat(getCrewByJob('Makeup Department Head')).map((person, idx) => (
        <span key={idx} className={styles.crewMember}>
          {person.name}
        </span>
      ))}
    </div>
  </div>
)}

{/* Casting */}
{getCrewByJob('Casting').length > 0 && (
  <div className={styles.crewDepartment}>
    <h4 className={styles.departmentTitle}>
      <Users size={18} /> Dirección de Casting
    </h4>
    <div className={styles.crewMembers}>
      {getCrewByJob('Casting').map((person, idx) => (
        <span key={idx} className={styles.crewMember}>
          {person.name}
        </span>
      ))}
    </div>
  </div>
)}

{/* Stunt Coordinator */}
{getCrewByJob('Stunt Coordinator').length > 0 && (
  <div className={styles.crewDepartment}>
    <h4 className={styles.departmentTitle}>
      <Zap size={18} /> Coordinación de Acrobacias
    </h4>
    <div className={styles.crewMembers}>
      {getCrewByJob('Stunt Coordinator').map((person, idx) => (
        <span key={idx} className={styles.crewMember}>
          {person.name}
        </span>
      ))}
    </div>
  </div>
)}