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
    public class CiudadesController : ControllerBase
    {
		private readonly IMunicipiosRepository _municipiosRepository;

		public CiudadesController(IMunicipiosRepository municipiosRepository)
		{
			_municipiosRepository = municipiosRepository;
		}

		// GET api/values
		[HttpGet]
		public ActionResult<IEnumerable<Municipio>> Get()
		{
			var ciudades = _municipiosRepository.GetMunicipios();
			return ciudades.ToList();
		}
	}
}