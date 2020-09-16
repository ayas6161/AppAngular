using System.Collections.Generic;
using System.Linq;
using Datingapp.API.Models;
using Newtonsoft.Json;

namespace Datingapp.API.Data
{
    public class Seed
    {
        public static  void SeedUsers(DataContext context)
         {
             if(!context.Users.Any())
             {
                 var usersData= System.IO.File.ReadAllText("Data/UserSeedData.json");
                 var users= JsonConvert.DeserializeObject<List<User>>(usersData);
                 foreach (var user in users)
                 {
                     byte[] passwordHash,passwordSalt;
                     


                     CreatePasswordHash("password",out passwordHash,out passwordSalt);

                     user.PasswordHash=passwordHash;
                     user.PasswordSalt=passwordSalt;
                     user.Username= user.Username.ToLower();
                     context.Users.Add(user);
        
                     
                 }
                 context.SaveChanges();
                 
             }



        }

        private static void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
             using(var hmacc=new System.Security.Cryptography.HMACSHA512())
           {
               passwordSalt= hmacc.Key;
               passwordHash=hmacc.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));


           }

        }

        
    }
}