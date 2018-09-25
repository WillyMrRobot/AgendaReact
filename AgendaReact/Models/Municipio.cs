using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AgendaReact.Models
{
	public class Municipio
	{
		public int MunicipioId { get; set; }
		public string Nombre { get; set; }
		public int DepartamentoId { get; set; }
	}
}
