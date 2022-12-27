/*
* This shader is a fork of: https://www.shadertoy.com/view/WldSRn
*/
precision highp float;

uniform float u_resolutionFactor;
uniform vec2  u_resolution;
uniform float u_time;
uniform vec2  u_mouse;

float sdSphere(vec3 pos, float size)
{
  return length(pos) - size;
}

float sdBox(vec3 pos, vec3 size)
{
  pos = abs(pos) - vec3(size);
  return max(max(pos.x, pos.y), pos.z);
}

float sdPlane(vec3 pos)
{
  return pos.y;
}

mat2 rotate(float a)
{
  float s = sin(a);
  float c = cos(a);
  return mat2(c, s, -s, c);
}

vec3 repeat(vec3 pos, vec3 span)
{
  return abs(mod(pos, span)) - span * 0.5;
}

float getDistance(vec3 pos, vec2 uv)
{
  vec3 originalPos = pos;

  for(int i = 0; i < 3; i++)
  {
    pos = abs(pos) - 4.5;
    pos.xz *= rotate(1.0);
    pos.yz *= rotate(1.0);
  }

  pos = repeat(pos, vec3(4.0));

  pos.xy *= rotate(abs(u_time));
  float d0 = abs(originalPos.x) - 0.1;
  float d1 = sdBox(pos, vec3(0.8));

  float size = 1.4;
  float d2 = sdSphere(pos, size);
  float dd2 = mix(d1, d2, 0.05 + abs(0.95 * sin(0.5 * u_time)));

  return max(max(d1, -dd2), -d0);
}

float getTargetZ(vec2 target) {
  float cameraDistance = mix(1., sqrt(2.0), (abs(target.x) + abs(target.y)) * 0.5);
  float squareDistance = cameraDistance * cameraDistance - target.x * target.x - target.y * target.y;
  float absSquareDistance = abs(squareDistance);
  float sign = squareDistance / absSquareDistance;
  return sign * sqrt(absSquareDistance);
}

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
  vec2 p = (fragCoord.xy * 2.0 - u_resolution.xy) / min(u_resolution.x, u_resolution.y);
  vec2 mouse = (u_mouse.xy * 2.0 - u_resolution.xy) / u_resolution;
  float targetZOffset = getTargetZ(mouse);

  // camera
  vec3 cameraOrigin = vec3(0.0, 0.0, u_time);
  vec3 cameraTarget = vec3(mouse.x, mouse.y, u_time + targetZOffset);
  vec3 upDirection = vec3(0.0, 1.0, 0.0);
  vec3 cameraDir = normalize(cameraTarget - cameraOrigin);
  vec3 cameraRight = normalize(cross(upDirection, cameraDir));
  vec3 cameraUp = cross(cameraDir, cameraRight);
  vec3 rayDirection = normalize(cameraRight * p.x + cameraUp * p.y + cameraDir);

  float depth = 0.0;
  float ac = 0.0;
  vec3 rayPos = vec3(0.0);
  float d = 0.0;

  for(int i = 0; i < 48; i++)
  {
    rayPos = cameraOrigin + rayDirection * depth;
    d = getDistance(rayPos, p);

    if(abs(d) < 0.001)
    {
        break;
    }

    ac += exp(-d * 6.);
    depth += d;
  }

  vec3 col = vec3(0.0, 0.3, 0.7);
  ac *= 1.2 * (u_resolution.x/u_resolution.y - abs(p.x)) ;
  vec3 finalCol = col * ac * 0.06;
  fragColor = vec4(finalCol, 1.0);
}

void main() {
  mainImage(gl_FragColor, gl_FragCoord.xy);
}
