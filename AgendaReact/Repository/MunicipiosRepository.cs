using AgendaReact.Models;
using Dapper;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;

namespace AgendaReact.Repository
{
	public class MunicipiosRepository : IMunicipiosRepository
	{
		private readonly IConfiguration _config;

		public MunicipiosRepository(IConfiguration config)
		{
			_config = config;
		}

		internal IDbConnection Connection
		{
			get
			{
				return new SqlConnection(_config.GetConnectionString("MyConnectionString"));
			}
		}

		public IEnumerable<Municipio> GetMunicipios()
		{
			var sql = @"SELECT m.Nombre, m.DepartamentoId, m.MunicipioId
						FROM  Municipios m";
			using (IDbConnection cnx = Connection)
			{
				cnx.Open();
				return cnx.Query<Municipio>(sql);
			}
		}
	}
}
