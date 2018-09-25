using System.Collections.Generic;
using AgendaReact.Models;

namespace AgendaReact.Repository
{
	public interface IDepartamentosRepository
	{
		IEnumerable<Departamento> GetDepartamentos();
	}
}