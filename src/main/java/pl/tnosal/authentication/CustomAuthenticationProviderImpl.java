package pl.tnosal.authentication;

import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.authentication.dao.AbstractUserDetailsAuthenticationProvider;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by gohilukk on 2015-05-16.
 */
public class CustomAuthenticationProviderImpl extends AbstractUserDetailsAuthenticationProvider {

    @Override
    protected void additionalAuthenticationChecks(UserDetails userDetails, UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken) throws AuthenticationException {

        System.out.println("<-----------additionalAuthenticationChecks--------------->");
    }

    @Override
    protected UserDetails retrieveUser(String username, UsernamePasswordAuthenticationToken authentication) throws AuthenticationException {
        System.out.println("<-----------retrieveUser--------------->");
        System.out.println("user: " + username);

        String password = authentication.getCredentials().toString();
        System.out.println("haslo: " + password);

        if ("user@user.pl".equals(username) && "password".equals("password")) {
            List<GrantedAuthority> grantedAuth = login(username, password);
            User user = new User(username, password, grantedAuth);
            System.out.println("user returned");
            return user;
        }

        System.out.println("bad credentials exception");
        throw new BadCredentialsException("Invalid credentials!!");
    }

    private List<GrantedAuthority> login(String u, String p) {
        List<GrantedAuthority> grantedAuth = new ArrayList<GrantedAuthority>();
        grantedAuth.add(new SimpleGrantedAuthority("ROLE_USER"));
        return grantedAuth;
    }
}
