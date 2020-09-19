using System;
using System.Collections.Generic;
using System.Linq;
using System.Security;
using System.Threading.Tasks;

namespace JWTClientFlow.Models
{
    public class ClientCredentials
    {
        public string UserName { get; set; }
        public string Secret { get; set; }

        public string Requestor { get; set; }
    }
}
