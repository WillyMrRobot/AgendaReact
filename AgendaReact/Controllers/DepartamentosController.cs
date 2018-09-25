using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using AgendaReact.Models;
using AgendaReact.Repository;

namespace AgendaReact.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DepartamentosController : ControllerBase
    {
		private readonly IDepartamentosRepository _departamentosRepository;

		public DepartamentosController(IDepartamentosRepository departamentosRepository)
		{
			_departamentosRepository = departamentosRepository;
		}

		// GET api/values
		[HttpGet]
		public ActionResult<IEnumerable<Departamento>> Get()
		{
			var departamentos = _departamentosRepository.GetDepartamentos();
			return departamentos.ToList();
		}
	}
}