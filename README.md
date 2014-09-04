ScriptLab
=========

Testing visual studio typescript and javascript project architecture

Can edit dll projects to compile typescript by adding line to propertyGroup csproj section
<PropertyGroup>
...
    <TypeScriptToolsVersion>1.0</TypeScriptToolsVersion>

Setup project TypeScript build options to compile to single file
link js, map and d.ts files to other projects
use bundler to includeDirectory *.js
    bundles.Add(new ScriptBundle("~/Scripts/app").IncludeDirectory("~/Scripts","*.js",true));

StackOverflow post on linking javascript files
http://stackoverflow.com/questions/8540292/how-do-you-share-scripts-among-multiple-projects-in-one-solution

Blog post on copying linked files on build
http://mattperdeck.com/post/Copying-linked-content-files-at-each-build-using-MSBuild.aspx
note need to edit to not skip unchanged files see blelow
    <Target Name="CopyLinkedContentFiles" BeforeTargets="Build">
        <Copy SourceFiles="%(Content.Identity)"
          DestinationFiles="%(Content.Link)"
          SkipUnchangedFiles='false'
          OverwriteReadOnlyFiles='true'
          Condition="'%(Content.Link)' != ''" />
    </Target>
