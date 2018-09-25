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
	public class DepartamentosRepository : IDepartamentosRepository
	{
		private readonly IConfiguration _config;

		public DepartamentosRepository(IConfiguration config)
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

		public IEnumerable<Departamento> GetDepartamentos()
		{
			var sql = @"SELECT d.Nombre, d.DepartamentoId 
						FROM  Departamentos d";
			using (IDbConnection cnx = Connection)
			{
				cnx.Open();
				return cnx.Query<Departamento>(sql);
			}
		}
	}
}
