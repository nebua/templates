using Microsoft.AspNetCore.Mvc;

namespace dotnet_webapi.Controllers;

[ApiController]
[Route("api")]
public class UserController : ControllerBase
{
    private static List<User> users = new List<User>
    {
        new User { Id = 1, Name = "John Doe", Email = "john@example.com" }
    };

    [HttpGet("health")]
    public IActionResult Health()
    {
        return Ok(new { status = "OK" });
    }

    [HttpGet("users")]
    public IActionResult GetUsers()
    {
        return Ok(users);
    }

    [HttpGet("users/{id}")]
    public IActionResult GetUser(int id)
    {
        var user = users.FirstOrDefault(u => u.Id == id);
        if (user == null) return NotFound();
        return Ok(user);
    }

    [HttpPost("users")]
    public IActionResult CreateUser(User user)
    {
        user.Id = users.Count + 1;
        users.Add(user);
        return CreatedAtAction(nameof(GetUser), new { id = user.Id }, user);
    }

    [HttpPut("users/{id}")]
    public IActionResult UpdateUser(int id, User user)
    {
        var existing = users.FirstOrDefault(u => u.Id == id);
        if (existing == null) return NotFound();
        existing.Name = user.Name;
        existing.Email = user.Email;
        return Ok(existing);
    }

    [HttpDelete("users/{id}")]
    public IActionResult DeleteUser(int id)
    {
        var user = users.FirstOrDefault(u => u.Id == id);
        if (user == null) return NotFound();
        users.Remove(user);
        return NoContent();
    }
}

public class User
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Email { get; set; }
}