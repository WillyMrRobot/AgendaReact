using System;
using System.Collections.Generic;
using AgendaReact.Models;

namespace AgendaReact.Repository
{
	public interface IAmigosRepository
	{
		Amigo CreateAmigo(Amigo amigo);
		void DeleteAmigo(Guid amigoId);
		Amigo FindAmigoById(Guid amigoId);
		IEnumerable<Amigo> GetAmigos();
		Amigo UpdateAmigo(Amigo amigo);
	}
}