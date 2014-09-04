using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(ScriptLab.Web.Site.Startup))]
namespace ScriptLab.Web.Site
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
