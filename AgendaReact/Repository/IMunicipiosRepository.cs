using System.Collections.Generic;
using AgendaReact.Models;

namespace AgendaReact.Repository
{
	public interface IMunicipiosRepository
	{
		IEnumerable<Municipio> GetMunicipios();
	}
}