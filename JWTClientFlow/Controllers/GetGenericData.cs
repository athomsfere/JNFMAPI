using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.IdentityModel;
using System.Security.Claims;


namespace JWTClientFlow.Controllers
{
    [Controller]
    [Route("[controller]")]
    [Authorize]
    public class GetGenericData : Controller
    {
        [HttpGet]
        public List<string> GetRandomStrings()
        {            
            var identity =  this.User.Identity as ClaimsIdentity;

            var strings = new List<string>()
            {
                "We just need",
                "to prove",
                "That this is safe",
                "for a user",
                $"when "
            };

            foreach(var claim in User.Claims)
            {
                strings.Add(claim.Value);
            }

            return strings;
        }
    }

}
