using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AgendaReact.Models
{
	public class Amigo
	{
		public Guid AmigoId { get; set; }
		public string Nombre { get; set; }
		public string Apellido { get; set; }
		public string Telefono { get; set; }
		public int? Ciudad { get; set; }
		public int? Departamento { get; set; }
		public string NombreCiudad { get; set; }
		public string NombreDepartamento { get; set; }
	}
}
