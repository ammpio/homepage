import rayAvatar from "@/assets/ray-avatar.webp";

/** Ray's avatar, drop-in replacement for an icon (accepts the same className sizing). */
export function RayIcon({ className = "" }: { className?: string }) {
  return <img src={rayAvatar} alt="Ray" className={`${className} rounded-full object-cover`} />;
}
