using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Datingapp.API.Data;
using System.Threading.Tasks;
using AutoMapper;
using Datingapp.API.Dtos;
using System.Collections.Generic;

namespace Datingapp.API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]


    public class UsersController : ControllerBase
    {
        private readonly IDatingRepository _repo;
        private readonly IMapper _mapper;

        public UsersController(IDatingRepository repo, IMapper mapper)
        {
            _mapper = mapper;
            _repo = repo;


        }
        [HttpGet]
        public async Task<IActionResult> GetUsers()

        {

            var users = await _repo.GetUsers();
            var usersToList = _mapper.Map<IEnumerable<UserForListDto>>(users);

            return Ok(usersToList);

        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetUser(int id)
        {
            var user = await _repo.GetUser(id);
            var UsersToDetail= _mapper.Map<UserForDetailedDto>(user);
            return Ok(UsersToDetail);
        }



    }
}