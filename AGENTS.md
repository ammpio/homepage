<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->
- Homepage sections live in src/components/site/HomeSections.tsx and are reused by / and /ray; the shared HeroVideo (RaySections) is the only hero video player — why: one source for the team-approved layout.
- All public UI copy uses the shared i18n dictionaries with US English fallback; language choice is persisted client-side — why: one maintainable source for English, Brazilian Portuguese, and Spanish.
- Media links use full Lovable CDN address via src/lib/assets.ts assetUrl() — why: /__l5e paths only resolve on Lovable hosting, not Netlify.
