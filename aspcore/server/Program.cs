using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;

namespace server
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var host = NewMethod()
                .Build();

            host.Run();
        }

        private static IWebHostBuilder NewMethod()
        {
            return new WebHostBuilder()
                            .UseKestrel()
                            .UseContentRoot(Directory.GetCurrentDirectory())
                            .UseIISIntegration()
                            .UseStartup<Startup>()
                            .UseUrls("http://localhost:8610");
        }
    }
}
